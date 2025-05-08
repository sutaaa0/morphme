"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react"
import Image from "next/image"

export default function AvatarPage() {
  const [timeframe, setTimeframe] = useState<"current" | "1month" | "3months">("current")

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Avatar</h1>
        <p className="text-gray-500">See how your diet affects your body shape</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Body Visualization</CardTitle>
            <CardDescription>Your virtual body based on your diet and activity</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Tabs defaultValue="front" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="front">Front View</TabsTrigger>
                <TabsTrigger value="side">Side View</TabsTrigger>
                <TabsTrigger value="back">Back View</TabsTrigger>
              </TabsList>
              <TabsContent value="front" className="mt-4 flex justify-center">
                <div className="relative h-96 w-64 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=384&width=256&text=Front+View"
                    alt="Avatar Front View"
                    className="h-full w-full object-cover"
                    width={256}
                    height={384}
                  />
                </div>
              </TabsContent>
              <TabsContent value="side" className="mt-4 flex justify-center">
                <div className="relative h-96 w-64 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=384&width=256&text=Side+View"
                    alt="Avatar Side View"
                    className="h-full w-full object-cover"
                    width={256}
                    height={384}
                  />
                </div>
              </TabsContent>
              <TabsContent value="back" className="mt-4 flex justify-center">
                <div className="relative h-96 w-64 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=384&width=256&text=Back+View"
                    alt="Avatar Back View"
                    className="h-full w-full object-cover"
                    width={256}
                    height={384}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex w-full justify-center gap-4">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 flex w-full justify-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Save Image
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prediction</CardTitle>
            <CardDescription>See your potential future body</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Timeframe</label>
                <div className="flex gap-2">
                  <Button
                    variant={timeframe === "current" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeframe("current")}
                  >
                    Current
                  </Button>
                  <Button
                    variant={timeframe === "1month" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeframe("1month")}
                  >
                    1 Month
                  </Button>
                  <Button
                    variant={timeframe === "3months" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeframe("3months")}
                  >
                    3 Months
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative h-48 w-32 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={`/placeholder.svg?height=192&width=128&text=${
                      timeframe === "current" ? "Current" : timeframe === "1month" ? "1 Month" : "3 Months"
                    }`}
                    alt={`Avatar ${timeframe} prediction`}
                    className="h-full w-full object-cover"
                    width={128}
                    height={192}
                  />
                </div>
              </div>

              <div className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                <p>
                  {timeframe === "current"
                    ? "This is your current body shape based on your logged meals and activity."
                    : timeframe === "1month"
                      ? "If you maintain your current diet and activity, this is how you could look in 1 month."
                      : "With your current habits, this is your projected body shape in 3 months."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Body Metrics</CardTitle>
          <CardDescription>Your current body measurements and stats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">Weight</p>
              <p className="text-2xl font-bold">68 kg</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">Height</p>
              <p className="text-2xl font-bold">175 cm</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">BMI</p>
              <p className="text-2xl font-bold">22.2</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">Body Fat</p>
              <p className="text-2xl font-bold">18%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
