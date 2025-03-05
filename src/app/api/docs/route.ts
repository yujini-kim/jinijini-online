import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const docsDir = path.join(process.cwd(), "docs");

export async function GET() {
  try {
    const files = await fs.readdir(docsDir);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    const docs = await Promise.all(
      markdownFiles.map(async (file) => {
        const content = await fs.readFile(path.join(docsDir, file), "utf-8");
        return { fileName: file, content };
      })
    );

    return NextResponse.json(docs);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
