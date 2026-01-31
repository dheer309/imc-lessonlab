"use client"

import React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Send, ArrowLeft, AlertTriangle, Lightbulb, CheckCircle2, Volume2, VolumeX, Mic, MicOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  role: "user" | "assistant"
  content: string
}

export default function RehearsePage() {
  const searchParams = useSearchParams()
  const lessonId = searchParams.get("lessonId")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi! I'm Max, and I'm 12 years old. My teacher said you're going to teach us something cool today about being a surgeon? I'm kind of nervous around doctors, but I'll try to pay attention! What are we learning about?",
    },
  ])
  const [input, setInput] = useState("")
  const [isWaiting, setIsWaiting] = useState(false)
  const [confidenceScore, setConfidenceScore] = useState(15)
  const [currentTip, setCurrentTip] = useState("Start by introducing yourself and your profession in a fun, relatable way!")
  const [detectedJargon, setDetectedJargon] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [ttsEnabled, setTtsEnabled] = useState(true)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [recognitionSupported, setRecognitionSupported] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const isListeningRef = useRef(false)

  // Check for speech recognition support
  useEffect(() => {
    setRecognitionSupported(
      typeof window !== "undefined" &&
        ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    )
  }, [])

  // Initialize speech recognition with continuous mode
  useEffect(() => {
    if (recognitionSupported && typeof window !== "undefined") {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognitionAPI()
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = "en-US"

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        let finalTranscript = ""

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalTranscript += transcript
          }
        }

        if (finalTranscript) {
          setInput((prev) => prev + finalTranscript)
        }
      }

      recognitionRef.current.onerror = () => {
        // Don't stop listening on transient errors
      }

      recognitionRef.current.onend = () => {
        // If we're still supposed to be listening, restart (browser may stop unexpectedly)
        if (isListeningRef.current) {
          try {
            recognitionRef.current?.start()
          } catch {
            isListeningRef.current = false
            setIsListening(false)
          }
        } else {
          setIsListening(false)
        }
      }
    }
  }, [recognitionSupported])

  // Speak text using ElevenLabs TTS via backend
  const speak = useCallback(async (text: string) => {
    if (!ttsEnabled) return

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    setIsSpeaking(true)
    try {
      const res = await fetch("http://localhost:8000/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      if (!res.ok) throw new Error("TTS failed")

      const audioBlob = await res.blob()
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      audioRef.current = audio

      audio.onended = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(audioUrl)
      }
      audio.onerror = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(audioUrl)
      }

      await audio.play()
    } catch {
      setIsSpeaking(false)
    }
  }, [ttsEnabled])

  // Stop speaking
  const stopSpeaking = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setIsSpeaking(false)
  }, [])

  // Toggle speech recognition
  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) return

    if (isListening) {
      isListeningRef.current = false
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      isListeningRef.current = true
      try {
        recognitionRef.current.start()
        setIsListening(true)
      } catch {
        isListeningRef.current = false
      }
    }
  }, [isListening])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Speak initial message
  useEffect(() => {
    if (messages.length === 1 && ttsEnabled) {
      const timer = setTimeout(() => {
        speak(messages[0].content)
      }, 500)
      return () => clearTimeout(timer)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSend = async () => {
    if (!input.trim() || isWaiting) return

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setIsWaiting(true)

    try {
      const res = await fetch("http://localhost:8000/api/rehearse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: lessonId ? parseInt(lessonId) : null,
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) throw new Error("Failed to get response")

      const data = await res.json()

      const aiMessage: Message = {
        id: updatedMessages.length + 1,
        role: "assistant",
        content: data.reply,
      }
      setMessages((prev) => [...prev, aiMessage])

      // Update sidebar from backend response
      setConfidenceScore(data.confidenceScore)
      setCurrentTip(data.tip)
      if (data.jargonDetected.length > 0) {
        setDetectedJargon((prev) => [
          ...prev,
          ...data.jargonDetected.filter((j: string) => !prev.includes(j)),
        ])
      }

      // Speak the AI response
      if (ttsEnabled) {
        speak(data.reply)
      }
    } catch {
      const fallbackMessage: Message = {
        id: updatedMessages.length + 1,
        role: "assistant",
        content: "Hmm, I got distracted for a second! Can you say that again?",
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      setIsWaiting(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const userMessageCount = messages.filter((m) => m.role === "user").length

  if (showResults) {
    return (
      <main className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Practice Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Final Score */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-32 w-32 items-center justify-center">
                  <svg className="h-full w-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-muted"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeDasharray={`${confidenceScore * 3.52} 352`}
                      className="text-primary"
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold text-foreground">
                    {confidenceScore}%
                  </span>
                </div>
                <p className="mt-2 text-lg font-medium text-foreground">Confidence Score</p>
              </div>

              {/* What Worked Well */}
              <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-left">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-green-800 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  What Worked Well
                </h3>
                <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                  <li>- Used relatable analogies to explain complex concepts</li>
                  <li>- Engaged Max with questions and activities</li>
                  <li>- Kept explanations age-appropriate</li>
                </ul>
              </div>

              {/* Suggestions */}
              <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 p-4 text-left">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-400">
                  <Lightbulb className="h-5 w-5" />
                  Suggestions for Improvement
                </h3>
                <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                  {detectedJargon.length > 0 && (
                    <li>- Simplify terms like: {detectedJargon.slice(0, 3).map(t => `"${t}"`).join(", ")}</li>
                  )}
                  <li>- Add more pauses after key points</li>
                  <li>- Include a quick recap at the end</li>
                </ul>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link href={lessonId ? `/feedback?lessonId=${lessonId}` : "/feedback"}>Ready to Teach!</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="flex h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <div className="border-b border-border bg-card px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href={lessonId ? `/lesson?id=${lessonId}` : "/lesson"}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="font-semibold text-foreground">Practice with Max</h1>
                <p className="text-sm text-muted-foreground">AI Student, Age 12</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* TTS Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  if (isSpeaking) stopSpeaking()
                  setTtsEnabled(!ttsEnabled)
                }}
                className={cn(
                  "h-9 w-9",
                  ttsEnabled ? "text-primary" : "text-muted-foreground"
                )}
                title={ttsEnabled ? "Disable voice" : "Enable voice"}
              >
                {ttsEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </Button>
              {userMessageCount >= 4 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    stopSpeaking()
                    setShowResults(true)
                  }}
                  className="bg-transparent"
                >
                  End Practice
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mx-auto max-w-2xl space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                        M
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">Max</span>
                      {isSpeaking && ttsEnabled && (
                        <Volume2 className="h-3 w-3 text-primary animate-pulse" />
                      )}
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isWaiting && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-muted px-4 py-3">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                      M
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Max</span>
                  </div>
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-card p-4">
          <div className="mx-auto flex max-w-2xl gap-2">
            {/* Microphone Button */}
            {recognitionSupported && (
              <Button
                variant={isListening ? "default" : "outline"}
                size="icon"
                onClick={toggleListening}
                className={cn(
                  isListening && "bg-red-500 hover:bg-red-600 text-white",
                  !isListening && "bg-transparent"
                )}
                title={isListening ? "Stop listening" : "Start speaking"}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </Button>
            )}
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isListening ? "Listening... (click mic to stop)" : "Teach Max about your topic..."}
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={!input.trim() || isWaiting}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          {recognitionSupported && (
            <p className="mt-2 text-center text-xs text-muted-foreground">
              {isListening ? "Mic is on - speak naturally, click mic to stop" : "Click the microphone to speak your response"}
            </p>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-full border-t border-border bg-muted/30 lg:w-80 lg:border-l lg:border-t-0">
        <div className="p-4 space-y-4">
          {/* Confidence Score */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Teaching Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16">
                  <svg className="h-full w-full -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-muted"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeDasharray={`${confidenceScore * 1.76} 176`}
                      className="text-primary transition-all duration-500"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                    {confidenceScore}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on clarity, engagement, and age-appropriateness
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Voice Status */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Volume2 className="h-4 w-4 text-primary" />
                Voice Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {ttsEnabled
                  ? "Max will speak their responses aloud."
                  : "Voice is muted. Click the speaker icon to enable."}
              </p>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Coaching Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">{currentTip}</p>
            </CardContent>
          </Card>

          {/* Jargon Detected */}
          {detectedJargon.length > 0 && (
            <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-400">
                  <AlertTriangle className="h-4 w-4" />
                  Jargon Detected
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {detectedJargon.map((term) => (
                    <li key={term} className="text-sm text-amber-700 dark:text-amber-300">
                      &ldquo;{term}&rdquo; - try simpler words
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}

// Type declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition
    webkitSpeechRecognition: typeof SpeechRecognition
  }
}
