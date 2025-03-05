import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const docsDir = path.join(process.cwd(), "public/docs");

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Markdown 파일 읽기
    const files = await fs.readdir(docsDir);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));

    const docs = await Promise.all(
      markdownFiles.map(async (file) => {
        const content = await fs.readFile(path.join(docsDir, file), "utf-8");
        return { fileName: file, content };
      })
    );

    // 유저 메시지와 관련 있는 문서를 찾기 (단순 키워드 매칭)
    const relevantDocs = docs.filter((doc) =>
      doc.content.toLowerCase().includes(message.toLowerCase())
    );

    // 응답 메시지 생성
    const responseMessage =
      relevantDocs.length > 0
        ? `관련된 문서를 찾았어요:\n\n` +
          relevantDocs
            .map((doc) => `📄 ${doc.fileName}\n${doc.content}`)
            .join("\n\n")
        : "관련된 정보를 찾지 못했어요.";

    return NextResponse.json({ message: responseMessage });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
