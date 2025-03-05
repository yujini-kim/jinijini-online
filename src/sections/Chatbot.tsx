import React, { useState, useEffect, FormEvent } from "react";
import { useChat } from "ai/react";

export default function Chatbot() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => setFiles(data));
  }, []);

  const checkPassword = () => {
    if (password === process.env.NEXT_PUBLIC_MY_CHATBOT_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="fixed bottom-2 right-3 w-80 py-6 px-4 bg-white border rounded shadow">
      {!isAuth ? (
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2 text-black">
            채팅 이용을 위해 비밀번호를 입력하세요
          </h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="border rounded p-2 mb-2 text-black"
          />
          <button
            onClick={checkPassword}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            확인
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-[600px]">
          {/* ✅ 마크다운 파일 리스트 표시 */}
          <div className="mb-4 p-2 bg-gray-100 rounded">
            <h3 className="text-sm text-black font-bold mb-2">
              📄 마크다운 파일 목록
            </h3>
            <ul className="text-xs">
              {files.map((file) => (
                <li key={file} className="mb-1">
                  <a
                    href={`/markdown/${file}`}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((m, index) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={index}
                  className={`my-2 flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[70%] whitespace-pre-wrap ${
                      isUser
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="유진, 그리고 프로젝트 대해 궁금한점을 질문해 보세요!"
              className="flex-1 border rounded p-2 text-black placeholder:text-[9px]"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white ml-2 px-4 py-2 rounded"
            >
              전송
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
