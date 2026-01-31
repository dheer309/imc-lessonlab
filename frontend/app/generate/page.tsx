"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const durations = [
  { value: "15", label: "15 min" },
  { value: "30", label: "30 min" },
  { value: "45", label: "45 min" },
]

const ageGroups = [
  { value: "10-11", label: "10-11" },
  { value: "12-13", label: "12-13" },
  { value: "13-14", label: "13-14" },
]

export default function GeneratePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [profession, setProfession] = useState("")
  const [concept, setConcept] = useState("")
  const [duration, setDuration] = useState("30")
  const [ageGroup, setAgeGroup] = useState("12-13")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch("http://localhost:8000/api/lessons/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profession, concept, duration, ageGroup }),
      })

      if (!res.ok) throw new Error("Failed to generate lesson")

      const lesson = await res.json()
      router.push(`/lesson?id=${lesson.id}`)
    } catch {
      alert("Failed to generate lesson. Is the backend running?")
      setIsLoading(false)
    }
  }

  const isFormValid = profession.trim() && concept.trim()

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Create Your Lesson
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Share your expertise and we&apos;ll help you craft an engaging lesson plan
          </p>
        </div>

        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle>Lesson Details</CardTitle>
            <CardDescription>
              Tell us about yourself and what you want to teach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="profession">What&apos;s your profession?</Label>
                <Input
                  id="profession"
                  placeholder="e.g., Surgeon, Lawyer, Engineer"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="concept">What ONE concept do you want to teach?</Label>
                <Input
                  id="concept"
                  placeholder="e.g., How the heart pumps blood"
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-3">
                <Label>Lesson Duration</Label>
                <div className="flex gap-2">
                  {durations.map((d) => (
                    <Button
                      key={d.value}
                      type="button"
                      variant={duration === d.value ? "default" : "outline"}
                      className={cn(
                        "flex-1",
                        duration !== d.value && "bg-transparent"
                      )}
                      onClick={() => setDuration(d.value)}
                      disabled={isLoading}
                    >
                      {d.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Student Age Group</Label>
                <div className="flex gap-2">
                  {ageGroups.map((a) => (
                    <Button
                      key={a.value}
                      type="button"
                      variant={ageGroup === a.value ? "default" : "outline"}
                      className={cn(
                        "flex-1",
                        ageGroup !== a.value && "bg-transparent"
                      )}
                      onClick={() => setAgeGroup(a.value)}
                      disabled={isLoading}
                    >
                      {a.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-4 h-12 w-full text-base"
                disabled={!isFormValid || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Lesson...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Lesson
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
