import ReviewReply from "@/components/ReviewReply"

export default function Home() {
  return (
    <main className="p-4 container max-w-5xl mx-auto">
        <div className="my-4">
            <h1 className="font-black text-xl">MARA Next.js / React example</h1>
            <p className="text-gray-500">
                The following app is a minimal example for the streaming solution of review replies with MARA. If you have any questions, please contact i.lange@mara.solutions. The JWT token provided here is generated in production in the app and refreshed as needed. Normally, the Smart Snippets are sent via the Settings Profile. This is also sent directly to the API for simplification.
            </p>
        </div>
        <div className="mt-6">
            <ReviewReply />
        </div>
    </main>
  )
}
