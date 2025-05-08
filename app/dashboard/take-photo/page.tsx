"use client"

import { useState } from "react"
import { Camera, ImageIcon, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function TakePhotoPage() {
  const [cameraActive, setCameraActive] = useState(false)
  const [photoTaken, setPhotoTaken] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)

  const startCamera = () => {
    setCameraActive(true)
  }

  const takePhoto = () => {
    setPhotoTaken(true)
    setCameraActive(false)
  }

  const retakePhoto = () => {
    setPhotoTaken(false)
    setCameraActive(true)
  }

  const analyzePhoto = () => {
    setAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setAnalyzing(false)
      // Navigate to results page in a real app
    }, 2000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Take a Photo of Your Food</h1>
        <p className="text-gray-500">Our AI will analyze the nutritional content automatically</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Food Photo</CardTitle>
          <CardDescription>Take a clear photo of your meal for the best results</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative mb-6 h-80 w-full overflow-hidden rounded-lg bg-gray-100">
            {!cameraActive && !photoTaken ? (
              <div className="flex h-full w-full flex-col items-center justify-center">
                <ImageIcon className="mb-4 h-16 w-16 text-gray-400" />
                <p className="text-gray-500">No photo taken yet</p>
              </div>
            ) : cameraActive ? (
              <div className="flex h-full w-full items-center justify-center bg-black">
                <p className="text-white">Camera preview would appear here</p>
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/placeholder.svg?height=320&width=480&text=Food+Photo"
                  alt="Food photo"
                  className="h-full w-full object-cover"
                  width={480}
                  height={320}
                />
              </div>
            )}
          </div>

          <div className="flex w-full flex-col gap-4">
            {!cameraActive && !photoTaken && (
              <Button onClick={startCamera} className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Start Camera
              </Button>
            )}

            {cameraActive && (
              <Button onClick={takePhoto} className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Take Photo
              </Button>
            )}

            {photoTaken && (
              <div className="flex gap-4">
                <Button variant="outline" onClick={retakePhoto} className="flex items-center gap-2">
                  <RotateCw className="h-4 w-4" />
                  Retake
                </Button>
                <Button onClick={analyzePhoto} disabled={analyzing} className="flex-1">
                  {analyzing ? (
                    <>
                      <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Photo"
                  )}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tips for Better Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-2">
            <li>Make sure the entire meal is visible in the frame</li>
            <li>Take the photo in good lighting conditions</li>
            <li>Include all items that are part of your meal</li>
            <li>For packaged foods, you can also take a photo of the nutrition label</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
