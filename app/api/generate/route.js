import { getUrlCollection } from "@/lib/urlCollection";

export async function POST(request) {
  try {
    const body = await request.json();
    const url = body?.url?.trim();
    const shorturl = body?.shorturl?.trim().toLowerCase();

    if (!url || !shorturl) {
      return Response.json(
        { success: false, error: true, message: "URL and short code are required." },
        { status: 400 }
      );
    }

    const shortCodePattern = /^[a-zA-Z0-9_-]{2,30}$/;
    if (!shortCodePattern.test(shorturl)) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "Short code must be 2-30 chars and contain only letters, numbers, - or _.",
        },
        { status: 400 }
      );
    }

    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      return Response.json(
        { success: false, error: true, message: "Please enter a valid URL." },
        { status: 400 }
      );
    }

    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return Response.json(
        { success: false, error: true, message: "Only http/https URLs are allowed." },
        { status: 400 }
      );
    }

    const collection = await getUrlCollection();

    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return Response.json(
        { success: false, error: true, message: "Short code already exists. Try another one." },
        { status: 409 }
      );
    }

    await collection.insertOne({
      url: parsedUrl.toString(),
      shorturl,
      createdAt: new Date(),
    });

    return Response.json({
      success: true,
      error: false,
      message: "Short URL generated successfully.",
    });
  } catch (error) {
    console.error("Generate URL API error:", error);
    return Response.json(
      {
        success: false,
        error: true,
        message: "Unable to create short URL. Check MongoDB connection and try again.",
      },
      { status: 500 }
    );
  }
}
