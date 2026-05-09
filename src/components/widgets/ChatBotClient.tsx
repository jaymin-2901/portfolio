"use client";

import dynamic from "next/dynamic";

const ChatBot = dynamic(
  () => import("@/components/widgets/ChatBot").then((mod) => mod.ChatBot),
  { ssr: false }
);

export function ChatBotClient() {
  return <ChatBot />;
}
