"use client"

import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Clock, Users, CheckCircle2, Circle, Calendar, MoreHorizontal, Trash2, Copy, Eye, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Lesson {
  id: number
  topic: string
  profession: string
  ageGroup: string
  duration: string
  status: "delivered" | "draft"
  createdAt: string
  deliveredAt?: string
  feedbackCount?: number
  avgRating?: number
}

function LessonCard({ lesson, onDelete }: { lesson: Lesson; onDelete: (id: number) => void }) {
  const isDelivered = lesson.status === "delivered"

  return (
    <Card className="flex flex-col border-border/50 transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <Badge
            variant={isDelivered ? "default" : "secondary"}
            className={isDelivered ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : ""}
          >
            {isDelivered ? (
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Delivered
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Circle className="h-3 w-3" />
                Draft
              </span>
            )}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/lesson?id=${lesson.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View Lesson
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={() => onDelete(lesson.id)}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold leading-snug text-foreground">
            {lesson.topic}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{lesson.profession}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            <Users className="h-3 w-3" />
            Ages {lesson.ageGroup}
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            {lesson.duration} min
          </Badge>
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Created {new Date(lesson.createdAt).toLocaleDateString()}
          </span>
        </div>

        {isDelivered && lesson.deliveredAt && (
          <div className="mt-3 rounded-lg bg-muted/50 p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Delivered</span>
              <span className="font-medium text-foreground">
                {new Date(lesson.deliveredAt).toLocaleDateString()}
              </span>
            </div>
            {lesson.feedbackCount !== undefined && lesson.avgRating !== undefined && (
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{lesson.feedbackCount} responses</span>
                <span className="font-medium text-amber-600 dark:text-amber-400">
                  {lesson.avgRating} avg rating
                </span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full bg-transparent">
          <Link href={`/lesson?id=${lesson.id}`}>{isDelivered ? "View Details" : "Continue Editing"}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLessons = () => {
    fetch("http://localhost:8000/api/lessons")
      .then((res) => res.json())
      .then((data) => {
        setLessons(data)
        setLoading(false)
      })
      .catch(() => {
        setLessons([])
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchLessons()
  }, [])

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:8000/api/lessons/${id}`, { method: "DELETE" })
      setLessons((prev) => prev.filter((l) => l.id !== id))
    } catch {
      // ignore
    }
  }

  const deliveredLessons = lessons.filter((l) => l.status === "delivered")
  const draftLessons = lessons.filter((l) => l.status === "draft")

  const filteredLessons =
    activeTab === "all"
      ? lessons
      : activeTab === "delivered"
        ? deliveredLessons
        : draftLessons

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          Loading lessons...
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              My Lessons
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Your lesson history and drafts
            </p>
          </div>
          <Button asChild>
            <Link href="/generate">Create New Lesson</Link>
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">{lessons.length}</p>
                <p className="text-sm text-muted-foreground">Total Lessons</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{deliveredLessons.length}</p>
                <p className="text-sm text-muted-foreground">Delivered</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{draftLessons.length}</p>
                <p className="text-sm text-muted-foreground">Drafts</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All ({lessons.length})</TabsTrigger>
            <TabsTrigger value="delivered">Delivered ({deliveredLessons.length})</TabsTrigger>
            <TabsTrigger value="drafts">Drafts ({draftLessons.length})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            {filteredLessons.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredLessons.map((lesson) => (
                  <LessonCard key={lesson.id} lesson={lesson} onDelete={handleDelete} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No lessons found.</p>
                <Button asChild className="mt-4">
                  <Link href="/generate">Create Your First Lesson</Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
