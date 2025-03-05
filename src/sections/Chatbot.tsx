"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { useChat } from "ai/react";

export default function Chatbot() {
  const [password, setPassword] = useState<string>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [chatHistory, setChatHistory] = useState(messages);

  // 비밀번호 확인 함수
  const checkPassword = () => {
    if (password.trim() === process.env.NEXT_PUBLIC_MY_CHATBOT_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
      setPassword(""); // 틀렸을 때 입력값 초기화
    }
  };
  useEffect(() => {
    const savedChat = sessionStorage.getItem("chatHistory");
    if (savedChat) {
      setChatHistory(JSON.parse(savedChat));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

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
          {/* 채팅 메시지 영역 */}
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
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
          {/* 입력 폼 */}
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            className="flex"
          >
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="유진, 그리고 프로젝트에 대해 궁금한 점을 질문해 보세요!"
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
