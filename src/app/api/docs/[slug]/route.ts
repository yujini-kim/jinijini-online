import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "docs", `${slug}.md`);

  try {
    // 📄 파일이 존재하는지 확인
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // 📖 Markdown 파일 읽기
    const content = fs.readFileSync(filePath, "utf-8");

    return NextResponse.json({ slug, content });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load file" }, { status: 500 });
  }
}
