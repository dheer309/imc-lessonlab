"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Theater, AlertTriangle, ArrowLeft, Loader2, MessageSquare, Send, Star, CheckCircle2, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface LessonContent {
  hook: { title: string; icon: string; content: string }
  coreConcept: { title: string; icon: string; content: string; analogy?: string }
  activity: { title: string; icon: string; content: string; steps: string[] }
  materials: { title: string; icon: string; items: string[] }
  reflectionQuestions: { title: string; icon: string; questions: string[] }
  takeaway: { title: string; icon: string; content: string }
  homework?: { title: string; icon: string; content: string; tasks: string[] }
  jargonAlerts: { term: string; simple: string }[]
}

interface LessonData {
  id: number
  profession: string
  concept: string
  duration: string
  ageGroup: string
  status: string
  content: LessonContent
  feedbackCount?: number
  avgRating?: number
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

  // Feedback state
  const [overallRating, setOverallRating] = useState(0)
  const [hookEffectiveness, setHookEffectiveness] = useState(0)
  const [conceptClarity, setConceptClarity] = useState(0)
  const [activityEngagement, setActivityEngagement] = useState(0)
  const [whatWentWell, setWhatWentWell] = useState("")
  const [whatToImprove, setWhatToImprove] = useState("")
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false)
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  // Quiz state
  const [hasQuiz, setHasQuiz] = useState(false)
  const [quizLoading, setQuizLoading] = useState(false)

  const isDelivered = lessonData?.status === "delivered"

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
        // Check if quiz exists
        fetch(`http://localhost:8000/api/lessons/${lessonId}/quiz`)
          .then((r) => { if (r.ok) setHasQuiz(true) })
          .catch(() => {})
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
      setLessonData(prev => prev ? { ...prev, content: data.updatedContent } : null)
      const aiMsg = { role: "assistant", content: data.summary }
      setEditMessages(prev => [...prev, aiMsg])
    } catch {
      const errorMsg = { role: "assistant", content: "Sorry, the edit failed. Please try again." }
      setEditMessages(prev => [...prev, errorMsg])
    } finally {
      setIsEditing(false)
    }
  }

  const handleFeedbackSubmit = async () => {
    if (!lessonId || overallRating === 0) return
    setFeedbackSubmitting(true)

    try {
      await fetch("http://localhost:8000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: parseInt(lessonId),
          type: "volunteer",
          data: {
            overallRating,
            hookEffectiveness,
            conceptClarity,
            activityEngagement,
            whatWentWell,
            whatToImprove,
          },
        }),
      })

      setFeedbackSubmitted(true)
      // Reload lesson to get updated status (now "delivered")
      const res = await fetch(`http://localhost:8000/api/lessons/${lessonId}`)
      if (res.ok) {
        const updated = await res.json()
        setLessonData(updated)
      }
    } catch {
      // Show success anyway for UX
      setFeedbackSubmitted(true)
    } finally {
      setFeedbackSubmitting(false)
    }
  }

  const handleGenerateQuiz = async () => {
    if (!lessonId) return
    setQuizLoading(true)
    try {
      const res = await fetch(`http://localhost:8000/api/lessons/${lessonId}/quiz`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numQuestions: 7 }),
      })
      if (!res.ok) throw new Error("Failed to generate quiz")
      window.location.href = `/quiz?lessonId=${lessonId}`
    } catch {
      setQuizLoading(false)
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

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="p-0.5 transition-colors"
          >
            <Star
              className={cn(
                "h-6 w-6",
                star <= value
                  ? "fill-amber-400 text-amber-400"
                  : "text-muted-foreground/30"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )

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
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {lessonData.concept}
                </h1>
                {isDelivered && (
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Delivered
                  </Badge>
                )}
              </div>
              <p className="mt-1 text-muted-foreground">
                by a {lessonData.profession} | {lessonData.duration} min | Ages {lessonData.ageGroup}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {!isDelivered && (
                <Button
                  variant={editMode ? "default" : "outline"}
                  size="sm"
                  className={cn("gap-2", !editMode && "bg-transparent")}
                  onClick={() => setEditMode(!editMode)}
                >
                  <MessageSquare className="h-4 w-4" />
                  {editMode ? "Close Editor" : "Edit with AI"}
                </Button>
              )}
              {hasQuiz ? (
                <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                  <Link href={`/quiz?lessonId=${lessonData.id}`}>
                    <ClipboardList className="h-4 w-4" />
                    View Quiz
                  </Link>
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 bg-transparent"
                  onClick={handleGenerateQuiz}
                  disabled={quizLoading}
                >
                  {quizLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ClipboardList className="h-4 w-4" />
                  )}
                  {quizLoading ? "Generating..." : "Generate Quiz"}
                </Button>
              )}
              <Button asChild size="sm" className="gap-2">
                <Link href={`/rehearse?lessonId=${lessonData.id}`}>
                  <Theater className="h-4 w-4" />
                  Practice This Lesson
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* AI Edit Panel - only for drafts */}
        {editMode && !isDelivered && (
          <Card className="mb-6 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Edit with AI</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell the AI what changes you&apos;d like to make to your lesson.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
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

          {/* Take-Home Activity */}
          {lesson.homework && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-xl" aria-hidden="true">{"🏠"}</span>
                  {lesson.homework.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-foreground">{lesson.homework.content}</p>
                <ol className="space-y-3">
                  {lesson.homework.tasks.map((task, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{task}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

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

          {/* Teacher Feedback Section */}
          {!isDelivered && !feedbackSubmitted && (
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-xl" aria-hidden="true">{"📝"}</span>
                  Post-Lesson Feedback
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  How did the lesson go? Rate your experience and mark this lesson as delivered.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <StarRating
                  label="Overall, how did the lesson go?"
                  value={overallRating}
                  onChange={setOverallRating}
                />
                <StarRating
                  label="How well did the hook grab attention?"
                  value={hookEffectiveness}
                  onChange={setHookEffectiveness}
                />
                <StarRating
                  label="Did students understand the core concept?"
                  value={conceptClarity}
                  onChange={setConceptClarity}
                />
                <StarRating
                  label="How engaged were students during the activity?"
                  value={activityEngagement}
                  onChange={setActivityEngagement}
                />

                <div className="space-y-2">
                  <Label htmlFor="went-well" className="text-sm">What went well?</Label>
                  <Textarea
                    id="went-well"
                    placeholder="e.g., Students loved the analogy about..."
                    value={whatWentWell}
                    onChange={(e) => setWhatWentWell(e.target.value)}
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="improve" className="text-sm">What would you change next time?</Label>
                  <Textarea
                    id="improve"
                    placeholder="e.g., The activity took longer than expected..."
                    value={whatToImprove}
                    onChange={(e) => setWhatToImprove(e.target.value)}
                    rows={2}
                  />
                </div>

                <Button
                  onClick={handleFeedbackSubmit}
                  disabled={overallRating === 0 || feedbackSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {feedbackSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Feedback & Mark as Delivered"
                  )}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Feedback submitted success */}
          {feedbackSubmitted && (
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
              <CardContent className="flex flex-col items-center py-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                  <CheckCircle2 className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Feedback submitted!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  This lesson is now marked as delivered. Great job teaching!
                </p>
              </CardContent>
            </Card>
          )}

          {/* Already delivered indicator */}
          {isDelivered && !feedbackSubmitted && (
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
              <CardContent className="flex items-center gap-3 py-4">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-medium text-foreground">Lesson delivered</p>
                  <p className="text-sm text-muted-foreground">
                    This lesson has been taught and can no longer be edited.
                    {lessonData.feedbackCount ? ` ${lessonData.feedbackCount} feedback response(s) received.` : ""}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
