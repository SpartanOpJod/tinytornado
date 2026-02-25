import { redirect } from "next/navigation"
import { getUrlCollection } from "@/lib/urlCollection";


export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    try {
      const collection = await getUrlCollection();
      const doc = await collection.findOne({ shorturl: shorturl.toLowerCase() });
      if (doc) {
        redirect(doc.url);
      }
    } catch (error) {
      console.error("Short URL redirect error:", error);
    }

    redirect("/");
  }
