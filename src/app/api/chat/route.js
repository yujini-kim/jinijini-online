import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import fs from "fs";
import path from "path";

export const maxDuration = 30;

function loadMarkdownFiles() {
  const dirPath = path.join(process.cwd(), "public", "markdown");
  const files = fs.readdirSync(dirPath);
  let content = "";
  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    content += fs.readFileSync(filePath, "utf-8") + "\n\n";
  });
  return content;
}

export async function POST(req) {
  const { messages } = await req.json();

  const markdownContent = loadMarkdownFiles();
  const systemPrompt = `너는 김유진이라는 사람에 대해 질문을 받고 답하는 챗봇이야.\n\n${markdownContent}\n\n📌 [응답 규칙]\n- 사용자가 정보를 물어보면 간결하고 정확하게 답변해.\n- 모르는 질문이 나오면 \"죄송해요, 해당 정보는 제공되지 않았어요.\"라고 답해.\n- 자연스럽고 친근한 톤을 유지해.\n- 동일 세션 내 대화를 기억해.`;

  const fullMessages = [{ role: "system", content: systemPrompt }, ...messages];

  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages: fullMessages,
  });

  return result.toDataStreamResponse();
}

//비밀번호 확인
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const password = searchParams.get("password");

    if (!password) {
      return Response.json(
        { success: false, message: "비밀번호가 제공되지 않았습니다." },
        { status: 400 }
      );
    }

    if (password === process.env.MY_CHATBOT_PASSWORD) {
      return Response.json({ success: true });
    } else {
      return Response.json(
        { success: false, message: "비밀번호가 틀렸습니다." },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error in GET /api/chat:", error);
    return Response.json(
      { success: false, message: "서버 오류 발생" },
      { status: 500 }
    );
  }
}
