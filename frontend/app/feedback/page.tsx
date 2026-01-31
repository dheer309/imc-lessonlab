"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type Rating = "great" | "okay" | "flopped" | null
type YesNoPartial = "yes" | "partially" | "no" | null
type ThumbsRating = "up" | "down" | null
type FavoritePart = "story" | "game" | "guest" | null

export default function FeedbackPage() {
  const searchParams = useSearchParams()
  const lessonId = searchParams.get("lessonId")

  // Volunteer feedback state
  const [hookRating, setHookRating] = useState<Rating>(null)
  const [conceptUnderstanding, setConceptUnderstanding] = useState<YesNoPartial>(null)
  const [activityRating, setActivityRating] = useState<Rating>(null)
  const [volunteerNotes, setVolunteerNotes] = useState("")
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false)

  // Student feedback state
  const [funRating, setFunRating] = useState<Rating>(null)
  const [learnedSomething, setLearnedSomething] = useState<ThumbsRating>(null)
  const [favoritePart, setFavoritePart] = useState<FavoritePart>(null)
  const [studentSubmitted, setStudentSubmitted] = useState(false)

  const handleVolunteerSubmit = async () => {
    if (!lessonId) {
      setVolunteerSubmitted(true)
      return
    }
    try {
      await fetch("http://localhost:8000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: parseInt(lessonId),
          type: "volunteer",
          data: { hookRating, conceptUnderstanding, activityRating, volunteerNotes },
        }),
      })
    } catch {
      // submit anyway for UX
    }
    setVolunteerSubmitted(true)
  }

  const handleStudentSubmit = async () => {
    if (!lessonId) {
      setStudentSubmitted(true)
      return
    }
    try {
      await fetch("http://localhost:8000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId: parseInt(lessonId),
          type: "student",
          data: { funRating, learnedSomething, favoritePart },
        }),
      })
    } catch {
      // submit anyway for UX
    }
    setStudentSubmitted(true)
  }

  const RatingButton = ({
    emoji,
    label,
    isSelected,
    onClick,
    size = "default",
  }: {
    emoji: string
    label: string
    isSelected: boolean
    onClick: () => void
    size?: "default" | "large"
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border-2 transition-all",
        size === "large" ? "gap-2 p-6" : "gap-1 p-4",
        isSelected
          ? "border-primary bg-primary/10"
          : "border-border bg-card hover:border-primary/50 hover:bg-accent"
      )}
    >
      <span className={cn(size === "large" ? "text-4xl" : "text-2xl")}>{emoji}</span>
      <span className={cn("font-medium", size === "large" ? "text-base" : "text-sm", isSelected ? "text-primary" : "text-muted-foreground")}>
        {label}
      </span>
    </button>
  )

  const SuccessMessage = ({ title }: { title: string }) => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <CheckCircle2 className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">Your feedback helps us improve lessons for everyone!</p>
    </div>
  )

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Share Feedback
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Help us improve lessons with your experience
          </p>
        </div>

        <Card className="border-border/50 shadow-sm">
          <Tabs defaultValue="volunteer" className="w-full">
            <CardHeader className="pb-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="volunteer">Volunteer Feedback</TabsTrigger>
                <TabsTrigger value="student">Student Feedback</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              {/* Volunteer Feedback Tab */}
              <TabsContent value="volunteer" className="mt-0">
                {volunteerSubmitted ? (
                  <SuccessMessage title="Thank you for your feedback!" />
                ) : (
                  <div className="space-y-8">
                    {/* Hook Rating */}
                    <div className="space-y-3">
                      <Label className="text-base">How did the Hook land?</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <RatingButton
                          emoji="🔥"
                          label="Great"
                          isSelected={hookRating === "great"}
                          onClick={() => setHookRating("great")}
                        />
                        <RatingButton
                          emoji="😐"
                          label="Okay"
                          isSelected={hookRating === "okay"}
                          onClick={() => setHookRating("okay")}
                        />
                        <RatingButton
                          emoji="😴"
                          label="Flopped"
                          isSelected={hookRating === "flopped"}
                          onClick={() => setHookRating("flopped")}
                        />
                      </div>
                    </div>

                    {/* Concept Understanding */}
                    <div className="space-y-3">
                      <Label className="text-base">Did students understand the concept?</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          type="button"
                          variant={conceptUnderstanding === "yes" ? "default" : "outline"}
                          className={cn("h-12", conceptUnderstanding !== "yes" && "bg-transparent")}
                          onClick={() => setConceptUnderstanding("yes")}
                        >
                          Yes
                        </Button>
                        <Button
                          type="button"
                          variant={conceptUnderstanding === "partially" ? "default" : "outline"}
                          className={cn("h-12", conceptUnderstanding !== "partially" && "bg-transparent")}
                          onClick={() => setConceptUnderstanding("partially")}
                        >
                          Partially
                        </Button>
                        <Button
                          type="button"
                          variant={conceptUnderstanding === "no" ? "default" : "outline"}
                          className={cn("h-12", conceptUnderstanding !== "no" && "bg-transparent")}
                          onClick={() => setConceptUnderstanding("no")}
                        >
                          No
                        </Button>
                      </div>
                    </div>

                    {/* Activity Rating */}
                    <div className="space-y-3">
                      <Label className="text-base">How did the Activity work?</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <RatingButton
                          emoji="🔥"
                          label="Great"
                          isSelected={activityRating === "great"}
                          onClick={() => setActivityRating("great")}
                        />
                        <RatingButton
                          emoji="😐"
                          label="Okay"
                          isSelected={activityRating === "okay"}
                          onClick={() => setActivityRating("okay")}
                        />
                        <RatingButton
                          emoji="😴"
                          label="Flopped"
                          isSelected={activityRating === "flopped"}
                          onClick={() => setActivityRating("flopped")}
                        />
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-3">
                      <Label htmlFor="notes" className="text-base">What would you change?</Label>
                      <Textarea
                        id="notes"
                        placeholder="Share any suggestions or observations..."
                        value={volunteerNotes}
                        onChange={(e) => setVolunteerNotes(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button
                      onClick={handleVolunteerSubmit}
                      size="lg"
                      className="w-full"
                      disabled={!hookRating || !conceptUnderstanding || !activityRating}
                    >
                      Submit Feedback
                    </Button>
                  </div>
                )}
              </TabsContent>

              {/* Student Feedback Tab */}
              <TabsContent value="student" className="mt-0">
                {studentSubmitted ? (
                  <SuccessMessage title="Thanks for sharing!" />
                ) : (
                  <div className="space-y-8">
                    <CardDescription className="text-center">
                      Quick feedback from students (simplified for kids)
                    </CardDescription>

                    {/* Fun Rating */}
                    <div className="space-y-3">
                      <Label className="text-center text-lg block">Was today&apos;s lesson fun?</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <RatingButton
                          emoji="🔥"
                          label="Yes!"
                          isSelected={funRating === "great"}
                          onClick={() => setFunRating("great")}
                          size="large"
                        />
                        <RatingButton
                          emoji="😐"
                          label="It was okay"
                          isSelected={funRating === "okay"}
                          onClick={() => setFunRating("okay")}
                          size="large"
                        />
                        <RatingButton
                          emoji="😴"
                          label="Not really"
                          isSelected={funRating === "flopped"}
                          onClick={() => setFunRating("flopped")}
                          size="large"
                        />
                      </div>
                    </div>

                    {/* Learned Something */}
                    <div className="space-y-3">
                      <Label className="text-center text-lg block">Did you learn something new?</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <RatingButton
                          emoji="👍"
                          label="Yes!"
                          isSelected={learnedSomething === "up"}
                          onClick={() => setLearnedSomething("up")}
                          size="large"
                        />
                        <RatingButton
                          emoji="👎"
                          label="Not really"
                          isSelected={learnedSomething === "down"}
                          onClick={() => setLearnedSomething("down")}
                          size="large"
                        />
                      </div>
                    </div>

                    {/* Favorite Part */}
                    <div className="space-y-3">
                      <Label className="text-center text-lg block">What was your favorite part?</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <RatingButton
                          emoji="📖"
                          label="Story"
                          isSelected={favoritePart === "story"}
                          onClick={() => setFavoritePart("story")}
                          size="large"
                        />
                        <RatingButton
                          emoji="🎮"
                          label="Game"
                          isSelected={favoritePart === "game"}
                          onClick={() => setFavoritePart("game")}
                          size="large"
                        />
                        <RatingButton
                          emoji="👨‍🏫"
                          label="Guest Teacher"
                          isSelected={favoritePart === "guest"}
                          onClick={() => setFavoritePart("guest")}
                          size="large"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={handleStudentSubmit}
                      size="lg"
                      className="w-full"
                      disabled={!funRating || !learnedSomething || !favoritePart}
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </main>
  )
}
