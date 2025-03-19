"use client";

import ChatbotIcon from "@assets/icons/chatbot.svg";
import { useState } from "react";
import Chatbot from "../sections/Chatbot";
export default function ChatbotBtn() {
  const [isOpen, setIsOpen] = useState(false);

  // 오버레이 클릭 시 챗봇 닫기
  const closeChatbot = () => setIsOpen(false);

  return (
    <>
      <div
        className="size-14 fixed bottom-2 right-4 cursor-pointer z-40 animate-bounce"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChatbotIcon className="w-full h-full text-white fill-current" />
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50" onClick={closeChatbot}>
          <div
            className="absolute bottom-2 right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Chatbot />
          </div>
        </div>
      )}
    </>
  );
}
