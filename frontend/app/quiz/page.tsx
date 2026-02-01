"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Loader2,
  ClipboardList,
  GraduationCap,
  RotateCcw,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface MCQOption {
  A: string
  B: string
  C: string
  D: string
}

interface MCQuestion {
  id: number
  question: string
  options: MCQOption
  correctAnswer: string
  explanation: string
}

interface QuizContent {
  title: string
  lessonConcept: string
  ageGroup: string
  totalQuestions: number
  questions: MCQuestion[]
}

interface QuizData {
  id: number
  lessonId: number
  content: QuizContent
  numQuestions: number
  createdAt: string
}

const OPTION_LETTERS = ["A", "B", "C", "D"] as const

export default function QuizPage() {
  const searchParams = useSearchParams()
  const lessonId = searchParams.get("lessonId")

  const [quiz, setQuiz] = useState<QuizData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Student quiz state
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!lessonId) {
      setError("No lesson ID provided.")
      setLoading(false)
      return
    }

    fetch(`http://localhost:8000/api/lessons/${lessonId}/quiz`)
      .then((res) => {
        if (!res.ok) throw new Error("Quiz not found")
        return res.json()
      })
      .then((data) => {
        setQuiz(data)
        setLoading(false)
      })
      .catch(() => {
        setError("No quiz found for this lesson. Generate it from the lesson page.")
        setLoading(false)
      })
  }, [lessonId])

  const handleSelect = (questionId: number, letter: string) => {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [questionId]: letter }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const getScore = (): number => {
    if (!quiz) return 0
    return quiz.content.questions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length
  }

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading quiz...
        </div>
      </main>
    )
  }

  if (error || !quiz) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">{error || "Quiz not found"}</p>
          <Button asChild className="mt-4">
            <Link href={lessonId ? `/lesson?id=${lessonId}` : "/library"}>
              Back to Lesson
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  const questions = quiz.content.questions
  const totalQuestions = questions.length
  const answeredCount = Object.keys(answers).length
  const score = getScore()

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/lesson?id=${lessonId}`}
            className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Lesson
          </Link>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {quiz.content.title}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {totalQuestions} questions | Ages {quiz.content.ageGroup}
          </p>
        </div>

        <Tabs defaultValue="student">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="student" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              Student Quiz
            </TabsTrigger>
            <TabsTrigger value="teacher" className="gap-2">
              <ClipboardList className="h-4 w-4" />
              Mark Scheme
            </TabsTrigger>
          </TabsList>

          {/* Student Quiz Tab */}
          <TabsContent value="student" className="space-y-6">
            {/* Score card - shown after submission */}
            {submitted && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="py-6 text-center">
                  <p className="text-4xl font-bold text-foreground">
                    {score}/{totalQuestions}
                  </p>
                  <p className="mt-1 text-muted-foreground">Questions Correct</p>
                  <Progress
                    value={(score / totalQuestions) * 100}
                    className="mt-4 h-3"
                  />
                  <div className="mt-4 flex justify-center gap-3">
                    <Button variant="outline" onClick={handleReset} className="gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Try Again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Progress indicator - shown before submission */}
            {!submitted && (
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Progress
                  value={(answeredCount / totalQuestions) * 100}
                  className="h-2 flex-1"
                />
                <span>
                  {answeredCount}/{totalQuestions} answered
                </span>
              </div>
            )}

            {/* Questions */}
            {questions.map((q) => {
              const userAnswer = answers[q.id]
              const isCorrect = userAnswer === q.correctAnswer

              return (
                <Card key={q.id}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-start gap-3 text-base">
                      <Badge
                        variant="secondary"
                        className={cn(
                          "mt-0.5 shrink-0",
                          submitted && userAnswer && isCorrect && "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                          submitted && userAnswer && !isCorrect && "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        )}
                      >
                        Q{q.id}
                      </Badge>
                      <span>{q.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {OPTION_LETTERS.map((letter) => {
                      const isSelected = userAnswer === letter
                      const isCorrectAnswer = q.correctAnswer === letter

                      let optionStyle = "border-border hover:border-primary/50"
                      if (!submitted && isSelected) {
                        optionStyle = "border-primary bg-primary/10"
                      }
                      if (submitted) {
                        if (isCorrectAnswer) {
                          optionStyle = "border-green-500 bg-green-50 dark:bg-green-900/20"
                        } else if (isSelected && !isCorrectAnswer) {
                          optionStyle = "border-red-500 bg-red-50 dark:bg-red-900/20"
                        } else {
                          optionStyle = "border-border opacity-60"
                        }
                      }

                      return (
                        <button
                          key={letter}
                          type="button"
                          onClick={() => handleSelect(q.id, letter)}
                          disabled={submitted}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg border-2 p-3 text-left text-sm transition-all",
                            optionStyle,
                            !submitted && "cursor-pointer"
                          )}
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-semibold text-xs">
                            {letter}
                          </span>
                          <span className="flex-1">{q.options[letter as keyof MCQOption]}</span>
                          {submitted && isCorrectAnswer && (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                          )}
                          {submitted && isSelected && !isCorrectAnswer && (
                            <XCircle className="h-5 w-5 shrink-0 text-red-600" />
                          )}
                        </button>
                      )
                    })}

                    {/* Explanation - shown after submission */}
                    {submitted && (
                      <div className="mt-3 rounded-lg bg-muted p-3 text-sm">
                        <span className="font-medium">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}

            {/* Submit button */}
            {!submitted && (
              <Button
                onClick={handleSubmit}
                disabled={answeredCount < totalQuestions}
                className="w-full"
                size="lg"
              >
                {answeredCount < totalQuestions
                  ? `Answer all questions to submit (${answeredCount}/${totalQuestions})`
                  : "Submit Answers"}
              </Button>
            )}
          </TabsContent>

          {/* Teacher Mark Scheme Tab */}
          <TabsContent value="teacher" className="space-y-6">
            <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
              <CardContent className="flex items-center gap-3 py-4">
                <ClipboardList className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="font-medium text-foreground">Mark Scheme</p>
                  <p className="text-sm text-muted-foreground">
                    Correct answers are highlighted in green with explanations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {questions.map((q) => (
              <Card key={q.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-start gap-3 text-base">
                    <Badge variant="secondary" className="mt-0.5 shrink-0">
                      Q{q.id}
                    </Badge>
                    <span>{q.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {OPTION_LETTERS.map((letter) => {
                    const isCorrect = q.correctAnswer === letter
                    return (
                      <div
                        key={letter}
                        className={cn(
                          "flex items-center gap-3 rounded-lg border-2 p-3 text-sm",
                          isCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : "border-border opacity-60"
                        )}
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-semibold text-xs">
                          {letter}
                        </span>
                        <span className="flex-1">{q.options[letter as keyof MCQOption]}</span>
                        {isCorrect && (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                        )}
                      </div>
                    )
                  })}

                  <div className="mt-3 rounded-lg bg-muted p-3 text-sm">
                    <span className="font-medium">Explanation: </span>
                    {q.explanation}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
