import { redirect } from "next/navigation"
import { getUrlCollection } from "@/lib/urlCollection"

export default async function Page({ params }) {
  const resolvedParams = await params
  const shorturl = (resolvedParams.shorturl || "").trim().toLowerCase()

  if (!shorturl) redirect("/")

  const collection = await getUrlCollection()
  const doc = await collection.findOne({ shorturl })

  if (doc?.url) {
    redirect(doc.url)
  }

  redirect("/")
}