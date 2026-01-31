"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Headphones, FileDown, Theater, AlertTriangle, ArrowLeft, Loader2, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface LessonContent {
  hook: { title: string; icon: string; content: string }
  coreConcept: { title: string; icon: string; content: string; analogy?: string }
  activity: { title: string; icon: string; content: string; steps: string[] }
  materials: { title: string; icon: string; items: string[] }
  reflectionQuestions: { title: string; icon: string; questions: string[] }
  takeaway: { title: string; icon: string; content: string }
  jargonAlerts: { term: string; simple: string }[]
}

interface LessonData {
  id: number
  profession: string
  concept: string
  duration: string
  ageGroup: string
  content: LessonContent
}

export default function LessonPage() {
  const searchParams = useSearchParams()
  const lessonId = searchParams.get("id")
  const [lessonData, setLessonData] = useState<LessonData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Edit mode state
  const [editMode, setEditMode] = useState(false)
  const [editMessages, setEditMessages] = useState<{role: string; content: string}[]>([])
  const [editInput, setEditInput] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!lessonId) {
      setError("No lesson ID provided. Please generate a lesson first.")
      setLoading(false)
      return
    }

    fetch(`http://localhost:8000/api/lessons/${lessonId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Lesson not found")
        return res.json()
      })
      .then((data) => {
        setLessonData(data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load lesson. Is the backend running?")
        setLoading(false)
      })
  }, [lessonId])

  const handleEditSubmit = async () => {
    if (!editInput.trim() || isEditing || !lessonId) return

    const userMsg = { role: "user", content: editInput }
    setEditMessages(prev => [...prev, userMsg])
    setEditInput("")
    setIsEditing(true)

    try {
      const res = await fetch(`http://localhost:8000/api/lessons/${lessonId}/edit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instruction: editInput }),
      })

      if (!res.ok) throw new Error("Edit failed")

      const data = await res.json()

      // Update the displayed lesson content
      setLessonData(prev => prev ? { ...prev, content: data.updatedContent } : null)

      // Add AI response to chat
      const aiMsg = { role: "assistant", content: data.summary }
      setEditMessages(prev => [...prev, aiMsg])
    } catch {
      const errorMsg = { role: "assistant", content: "Sorry, the edit failed. Please try again." }
      setEditMessages(prev => [...prev, errorMsg])
    } finally {
      setIsEditing(false)
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading lesson...
        </div>
      </main>
    )
  }

  if (error || !lessonData) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">{error || "Lesson not found"}</p>
          <Button asChild className="mt-4">
            <Link href="/generate">Generate a Lesson</Link>
          </Button>
        </div>
      </main>
    )
  }

  const lesson = lessonData.content

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/library"
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Library
          </Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                {lessonData.concept}
              </h1>
              <p className="mt-1 text-muted-foreground">
                by a {lessonData.profession} | {lessonData.duration} min | Ages {lessonData.ageGroup}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={editMode ? "default" : "outline"}
                size="sm"
                className={cn("gap-2", !editMode && "bg-transparent")}
                onClick={() => setEditMode(!editMode)}
              >
                <MessageSquare className="h-4 w-4" />
                {editMode ? "Close Editor" : "Edit with AI"}
              </Button>
              <Button asChild size="sm" className="gap-2">
                <Link href={`/rehearse?lessonId=${lessonData.id}`}>
                  <Theater className="h-4 w-4" />
                  Practice This Lesson
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* AI Edit Panel */}
        {editMode && (
          <Card className="mb-6 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Edit with AI</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell the AI what changes you&apos;d like to make to your lesson.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Chat messages */}
              {editMessages.length > 0 && (
                <div className="max-h-60 overflow-y-auto space-y-3">
                  {editMessages.map((msg, i) => (
                    <div key={i} className={cn(
                      "rounded-lg px-3 py-2 text-sm",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground ml-8"
                        : "bg-muted mr-8"
                    )}>
                      {msg.content}
                    </div>
                  ))}
                  {isEditing && (
                    <div className="bg-muted mr-8 rounded-lg px-3 py-2">
                      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                    </div>
                  )}
                </div>
              )}
              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleEditSubmit() }}
                  placeholder='e.g., "Make the hook more engaging" or "Add a hands-on activity"'
                  disabled={isEditing}
                />
                <Button onClick={handleEditSubmit} disabled={!editInput.trim() || isEditing}>
                  {isEditing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lesson Sections */}
        <div className="space-y-6">
          {/* The Hook */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl" aria-hidden="true">{"🎣"}</span>
                {lesson.hook.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-foreground">{lesson.hook.content}</p>
            </CardContent>
          </Card>

          {/* Core Concept */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl" aria-hidden="true">{"🧠"}</span>
                {lesson.coreConcept.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-foreground">{lesson.coreConcept.content}</p>
              {lesson.coreConcept.analogy && (
                <div className="rounded-lg bg-primary/5 p-4">
                  <p className="text-sm font-medium text-primary">Analogy:</p>
                  <p className="mt-1 text-foreground">{lesson.coreConcept.analogy}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* The Activity */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl" aria-hidden="true">{"🎮"}</span>
                {lesson.activity.title}: {lesson.activity.content}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {lesson.activity.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Materials */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl" aria-hidden="true">{"📦"}</span>
                {lesson.materials.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 sm:grid-cols-2">
                {lesson.materials.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Reflection Questions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl" aria-hidden="true">{"💭"}</span>
                {lesson.reflectionQuestions.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {lesson.reflectionQuestions.questions.map((question, index) => (
                  <li key={index} className="flex gap-3 text-foreground">
                    <span className="text-muted-foreground">{index + 1}.</span>
                    {question}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Takeaway */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="text-xl" aria-hidden="true">{"🎯"}</span>
                {lesson.takeaway.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium leading-relaxed text-foreground">
                {lesson.takeaway.content}
              </p>
            </CardContent>
          </Card>

          {/* Jargon Alerts */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Jargon Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Watch out for these complex words - use the simpler alternatives when teaching:
              </p>
              <div className="flex flex-wrap gap-2">
                {lesson.jargonAlerts.map((alert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm"
                  >
                    <span className="font-semibold">{alert.term}</span>
                    <span className="mx-2 text-muted-foreground">&rarr;</span>
                    <span className="text-muted-foreground">{alert.simple}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
