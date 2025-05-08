import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function FoodLogPage() {
  const meals = [
    {
      date: "Today",
      items: [
        {
          name: "Breakfast - Oatmeal with Berries",
          time: "8:30 AM",
          calories: 320,
          carbs: 45,
          protein: 12,
          fat: 8,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Lunch - Grilled Chicken Salad",
          time: "12:45 PM",
          calories: 450,
          carbs: 15,
          protein: 40,
          fat: 25,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Snack - Apple and Almonds",
          time: "3:30 PM",
          calories: 180,
          carbs: 25,
          protein: 5,
          fat: 10,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      date: "Yesterday",
      items: [
        {
          name: "Breakfast - Scrambled Eggs with Toast",
          time: "8:15 AM",
          calories: 380,
          carbs: 30,
          protein: 20,
          fat: 18,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Lunch - Tuna Sandwich",
          time: "1:00 PM",
          calories: 420,
          carbs: 40,
          protein: 30,
          fat: 15,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Dinner - Pasta with Tomato Sauce",
          time: "7:30 PM",
          calories: 550,
          carbs: 80,
          protein: 15,
          fat: 12,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
  ]

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Food Log</h1>
        <p className="text-gray-500">Track your meals and nutritional intake</p>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="mt-4">
          <div className="space-y-6">
            {meals.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h2 className="mb-4 text-xl font-semibold">{day.date}</h2>
                <div className="space-y-4">
                  {day.items.map((meal, mealIndex) => (
                    <Card key={mealIndex}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <Image
                            src={meal.image || "/placeholder.svg"}
                            alt={meal.name}
                            className="h-20 w-20 rounded-md object-cover"
                            width={80}
                            height={80}
                          />
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h3 className="font-medium">{meal.name}</h3>
                              <p className="text-sm text-gray-500">{meal.time}</p>
                            </div>
                            <div className="flex gap-4 text-sm">
                              <span>{meal.calories} kcal</span>
                              <span>•</span>
                              <span>C: {meal.carbs}g</span>
                              <span>•</span>
                              <span>P: {meal.protein}g</span>
                              <span>•</span>
                              <span>F: {meal.fat}g</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="calendar" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>View your meals by date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center">
                <p className="text-gray-500">Calendar view coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
