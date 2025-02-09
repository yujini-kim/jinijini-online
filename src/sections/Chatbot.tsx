"use client";

import React, { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  // 비밀번호 상태
  const [password, setPassword] = useState("");
  // 인증 여부
  const [isAuth, setIsAuth] = useState(false);

  // ai/react에서 제공하는 useChat 훅
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // 비밀번호 확인 (클라이언트 측)
  const checkPassword = () => {
    if (password === process.env.NEXT_PUBLIC_MY_CHATBOT_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch px-4">
      {/* 아직 인증 안 됐다면, 비밀번호 입력창 */}
      {!isAuth ? (
        <div className="bg-white border p-4 rounded shadow">
          <h2 className="text-black text-lg font-bold mb-2">
            채팅 이용을 위해 비밀번호를 입력하세요
          </h2>
          <input
            type="password"
            className="border rounded p-2 w-full mb-2 text-black"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={checkPassword}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            확인
          </button>
        </div>
      ) : (
        // 인증된 상태 -> 채팅 UI
        <div className="bg-white border p-4 rounded shadow flex flex-col h-[250px] md:h-[300px] lg:h-[600px]">
          {/* 채팅 메시지 영역 (스크롤) */}
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`my-2 flex ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
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
          <form onSubmit={handleSubmit} className="flex">
            <input
              className="flex-1 border rounded p-2 text-black"
              value={input}
              onChange={handleInputChange}
              placeholder="Say something..."
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
