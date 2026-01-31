"use client"

import { useEffect, useState } from "react"
import { BookOpen, Users, Star, Lightbulb, TrendingUp, Trophy, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface StatItem {
  label: string
  value: string
  change: string
}

interface InsightItem {
  icon: string
  text: string
  color: string
}

interface TopActivity {
  name: string
  profession: string
  rating: number
}

interface PopularProfession {
  name: string
  lessons: number
  percentage: number
}

interface AnalyticsData {
  stats: StatItem[]
  insights: InsightItem[]
  topActivities: TopActivity[]
  popularProfessions: PopularProfession[]
}

const statIcons = [BookOpen, Users, Star]

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/api/analytics")
      .then((res) => res.json())
      .then((d) => {
        setData(d)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading analytics...
        </div>
      </main>
    )
  }

  if (!data) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <p className="text-muted-foreground">Failed to load analytics. Is the backend running?</p>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Analytics Dashboard
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Insights from lessons across the LessonLab community
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {data.stats.map((stat, index) => {
            const Icon = statIcons[index] || BookOpen
            return (
              <Card key={stat.label} className="border-border/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Insights Section */}
        <div className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Insights
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {data.insights.map((insight, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${insight.color}`}>
                    Insight
                  </div>
                  <p className="text-foreground leading-relaxed">{insight.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Top Activities */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                Top Activities That Work
              </CardTitle>
              <CardDescription>Highest-rated activities from volunteer lessons</CardDescription>
            </CardHeader>
            <CardContent>
              {data.topActivities.length > 0 ? (
                <div className="space-y-4">
                  {data.topActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium text-foreground">{activity.name}</p>
                          <p className="text-xs text-muted-foreground">{activity.profession}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        <span className="text-sm font-medium text-foreground">{activity.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No activities yet. Create some lessons first!</p>
              )}
            </CardContent>
          </Card>

          {/* Popular Professions */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Most Popular Professions
              </CardTitle>
              <CardDescription>Breakdown of lessons by volunteer profession</CardDescription>
            </CardHeader>
            <CardContent>
              {data.popularProfessions.length > 0 ? (
                <div className="space-y-5">
                  {data.popularProfessions.map((profession) => (
                    <div key={profession.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{profession.name}</span>
                        <span className="text-sm text-muted-foreground">{profession.lessons} lessons</span>
                      </div>
                      <Progress value={profession.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No professions yet. Create some lessons first!</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
