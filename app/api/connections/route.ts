import db from "@/lib/db";
import * as schema from "@/lib/db/schema";

export async function GET() {
  const connections = await db.select().from(schema.connections).orderBy(schema.connections.name);
  return Response.json(connections);
}
