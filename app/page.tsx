import { auth } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Camera, TrendingUp, Utensils, Weight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AvatarPreview from "@/components/dashboard/avatar-preview"
import NutritionSummary from "@/components/dashboard/nutrition-summary"
import Image from "next/image"

export default async function Home() {
  const session = await auth()
  const user = session?.user

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name?.split(" ")[0]}!</h1>
          <p className="text-gray-500">Track your nutrition and see your progress in real-time.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/take-photo">
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Camera className="h-4 w-4" />
              Take Food Photo
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Daily Calories</CardTitle>
            <Utensils className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245 / 2,000</div>
            <Progress value={62} className="mt-2 h-2" />
            <p className="mt-2 text-xs text-gray-500">62% of daily goal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
            <Weight className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68 kg</div>
            <div className="mt-2 flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              <span>2 kg lost this month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Meals Logged</CardTitle>
            <Utensils className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 today</div>
            <p className="mt-2 text-xs text-gray-500">12 meals this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="mt-2 text-xs text-gray-500">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Your Avatar</CardTitle>
            <CardDescription>See how your diet affects your body</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <AvatarPreview />
          </CardContent>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Today&apos;s Nutrition</CardTitle>
            <CardDescription>Breakdown of your nutritional intake</CardDescription>
          </CardHeader>
          <CardContent>
            <NutritionSummary />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Meals</CardTitle>
          <CardDescription>Your recently logged meals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                name: "Breakfast - Oatmeal with Berries",
                time: "8:30 AM",
                calories: 320,
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Lunch - Grilled Chicken Salad",
                time: "12:45 PM",
                calories: 450,
                image: "/placeholder.svg?height=60&width=60",
              },
              {
                name: "Snack - Apple and Almonds",
                time: "3:30 PM",
                calories: 180,
                image: "/placeholder.svg?height=60&width=60",
              },
            ].map((meal, i) => (
              <div key={i} className="flex items-center gap-4">
                <Image
                  src={meal.image || "/placeholder.svg"}
                  alt={meal.name}
                  className="h-12 w-12 rounded-md object-cover"
                  width={60}
                  height={60}
                />
                <div className="flex-1">
                  <h4 className="font-medium">{meal.name}</h4>
                  <p className="text-sm text-gray-500">{meal.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{meal.calories} kcal</p>
                  <p className="text-sm text-gray-500">View Details</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
