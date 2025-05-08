"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const weightData = [
  { date: "May 1", weight: 72 },
  { date: "May 8", weight: 71 },
  { date: "May 15", weight: 70.5 },
  { date: "May 22", weight: 69.8 },
  { date: "May 29", weight: 69 },
  { date: "Jun 5", weight: 68.5 },
  { date: "Jun 12", weight: 68 },
]

const calorieData = [
  { date: "Jun 6", calories: 1850 },
  { date: "Jun 7", calories: 1920 },
  { date: "Jun 8", calories: 1750 },
  { date: "Jun 9", calories: 2100 },
  { date: "Jun 10", calories: 1800 },
  { date: "Jun 11", calories: 1650 },
  { date: "Jun 12", calories: 1900 },
]

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Progress Tracking</h1>
        <p className="text-gray-500">Monitor your weight and nutritional trends</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weight Progress</CardTitle>
          <CardDescription>Track your weight changes over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
                <Tooltip />
                <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <div>
              <p>Starting weight: 72 kg</p>
              <p>Current weight: 68 kg</p>
            </div>
            <div>
              <p>Total loss: 4 kg</p>
              <p>Average: 0.5 kg/week</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calorie Intake</CardTitle>
          <CardDescription>Your daily calorie consumption</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={calorieData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1500, 2200]} />
                <Tooltip />
                <Line type="monotone" dataKey="calories" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <div>
              <p>Average daily calories: 1,853 kcal</p>
              <p>Target: 2,000 kcal</p>
            </div>
            <div>
              <p>Highest: 2,100 kcal</p>
              <p>Lowest: 1,650 kcal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Nutrient Distribution</CardTitle>
            <CardDescription>Average macronutrient breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <svg className="h-32 w-32">
                      <circle cx="64" cy="64" r="60" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="8"
                        strokeDasharray="377"
                        strokeDashoffset="94.25"
                        transform="rotate(-90 64 64)"
                      />
                    </svg>
                    <p className="mt-2 text-lg font-medium">Carbs</p>
                    <p className="text-sm text-gray-500">45%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="h-32 w-32">
                      <circle cx="64" cy="64" r="60" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="8"
                        strokeDasharray="377"
                        strokeDashoffset="226.2"
                        transform="rotate(-90 64 64)"
                      />
                    </svg>
                    <p className="mt-2 text-lg font-medium">Protein</p>
                    <p className="text-sm text-gray-500">30%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="h-32 w-32">
                      <circle cx="64" cy="64" r="60" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                      <circle
                        cx="64"
                        cy="64"
                        r="60"
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="8"
                        strokeDasharray="377"
                        strokeDashoffset="301.6"
                        transform="rotate(-90 64 64)"
                      />
                    </svg>
                    <p className="mt-2 text-lg font-medium">Fat</p>
                    <p className="text-sm text-gray-500">25%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Level</CardTitle>
            <CardDescription>Your weekly exercise summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Steps</span>
                  <span>8,542 / 10,000 daily</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Exercise</span>
                  <span>3 / 5 days</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Active Minutes</span>
                  <span>145 / 150 minutes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "97%" }}></div>
                </div>
              </div>
              <div className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                <p>You&apos;re on track with your activity goals! Keep up the good work.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
