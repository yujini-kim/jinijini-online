"use client";

import ChatbotIcon from "@assets/icons/chatbot.svg";
import Chatbot from "../sections/Chatbot";
import { useState } from "react";

export default function ChatbotBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="size-14 fixed bottom-2 right-4 animate-bounce"
        onMouseEnter={() => setIsOpen(!isOpen)}
      >
        <ChatbotIcon className="w-full h-full text-white fill-current" />
      </div>
      {isOpen && (
        <div
          className="fixed bottom-2 right-4"
          onMouseLeave={() => setIsOpen(false)}
        >
          <Chatbot />
        </div>
      )}
    </>
  );
}
