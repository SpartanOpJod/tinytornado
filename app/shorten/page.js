"use client"
import Link from "next/link"
import React, { useState } from "react"

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")
  const [loading, setLoading] = useState(false)

  const generate = async () => {
    const cleanedUrl = url.trim()
    const cleanedShort = shorturl.trim().toLowerCase()

    if (!cleanedUrl || !cleanedShort) {
      alert("Please enter both URL and short code.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: cleanedUrl,
          shorturl: cleanedShort
        })
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        alert(result.message || "Failed to generate short URL.")
        return
      }

      const host = (process.env.NEXT_PUBLIC_HOST || window.location.origin).replace(/\/$/, "")
      setGenerated(`${host}/${encodeURIComponent(cleanedShort)}`)
      seturl("")
      setshorturl("")
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-10 space-y-6 transition-all duration-300 hover:shadow-blue-200">

        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Create a Short URL
        </h1>

        <p className="text-gray-500 text-center">
          Paste your long URL and choose a custom short code.
        </p>

        <div className="space-y-4">

          <input
            type="text"
            value={url}
            placeholder="Enter your long URL"
            onChange={e => seturl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

          <input
            type="text"
            value={shorturl}
            placeholder="Enter preferred short code"
            onChange={e => setshorturl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />

          <button
            onClick={generate}
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Short Link"}
          </button>

        </div>

        {generated && (
          <div className="mt-6 p-4 bg-gray-50 border rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 transition-all duration-300">
            
            <Link
              target="_blank"
              href={generated}
              className="text-blue-600 font-medium break-all hover:underline"
            >
              {generated}
            </Link>

            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-lg text-sm transition"
            >
              Copy
            </button>

          </div>
        )}

      </div>
    </div>
  )
}

export default Shorten