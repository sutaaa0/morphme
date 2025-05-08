import type { Metadata } from "next"
import GoogleLoginButton from "@/components/google-login-button"

export const metadata: Metadata = {
  title: "MorphMe - Login",
  description: "Visualize your diet and body changes with AI assistance",
}

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-green-50 to-white">
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-green-600">MorphMe</h1>
            <p className="mt-3 text-lg text-gray-600">Visualize your diet and body changes with AI assistance</p>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-900">Sign in to your account</h2>
                  <p className="mt-2 text-sm text-gray-500">Start your journey to a healthier you</p>
                </div>

                <GoogleLoginButton />

                <div className="text-center text-xs text-gray-500">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Automatic food detection with AI</p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Visual body transformation tracking</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6">
        <div className="flex justify-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MorphMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
