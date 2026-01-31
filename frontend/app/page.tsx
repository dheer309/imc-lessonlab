import Link from "next/link"
import { ArrowRight, Sparkles, MessageSquare, TrendingUp, Users, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Sparkles,
    title: "Generate",
    description: "Create engaging, age-appropriate lesson plans in minutes. Just share your profession and concept.",
  },
  {
    icon: MessageSquare,
    title: "Rehearse",
    description: "Practice your lesson with an AI student that asks real questions kids would ask.",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Get feedback from real classrooms and access a library of proven lesson plans.",
  },
]

const stats = [
  { value: "8,000+", label: "volunteers", icon: Users },
  { value: "47", label: "lessons created", icon: BookOpen },
  { value: "892", label: "students inspired", icon: Heart },
]

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,var(--tw-gradient-from)_0%,transparent_100%)] from-primary/10" />
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turn your expertise into inspiring lessons
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            LessonLab helps volunteer professionals create engaging lessons for 10-14 year olds. 
            Generate, rehearse, and refine your teaching with AI-powered tools.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/generate">
                Create a Lesson
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent">
              <Link href="/library">Browse Library</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50 bg-card shadow-sm transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-auto border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <stat.icon className="mb-1 h-5 w-5 text-primary sm:hidden" />
                <span className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</span>
                <span className="text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
