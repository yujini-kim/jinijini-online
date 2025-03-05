import fs from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "public", "markdown");
  const files = fs.readdirSync(dirPath);

  return Response.json(files);
}
