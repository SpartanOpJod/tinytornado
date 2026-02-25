import clientPromise from "@/lib/mongodb";

const DB_NAME = "tinytornado";
const COLLECTION_NAME = "urls";

export async function getUrlCollection() {
  const client = await clientPromise;
  return client.db(DB_NAME).collection(COLLECTION_NAME);
}
