"use client";

import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

const QUICK_PROMPTS = [
  "Summarize today's risks",
  "Show key smartwatch concerns",
  "What should I review first?",
];

const DUMMY_RESPONSES: Record<string, string> = {
  "Summarize today's risks":
    "Today's dummy priorities are metabolic drift, irregular sleep timing, and kapha-heavy digestive load. Blood, watch, and Nadi sections are the main areas to review first.",
  "Show key smartwatch concerns":
    "The smartwatch dummy view highlights moderate HRV, borderline step consistency, and sleep duration below the preferred recovery range.",
  "What should I review first?":
    "Start with Bio Hack Data for body composition, then Smart Watch Data for sleep and recovery, and then open Nadi Device for the integrative interpretation.",
};

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

export default function DoctorChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hello doctor. I am your dummy dashboard assistant. Ask me for summaries, risks, or where to look first.",
    },
    {
      role: "bot",
      text: "Example: 'Summarize today's risks' or tap one of the quick prompts below.",
    },
  ]);

  const placeholder = useMemo(
    () => "Ask about risk, smartwatch, biohack, Nadi, or plan...",
    []
  );

  const sendMessage = (rawText: string) => {
    const text = rawText.trim();
    if (!text) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text },
      {
        role: "bot",
        text:
          DUMMY_RESPONSES[text] ??
          "This is a dummy chatbot response. In a real build, this panel could summarize the current page, answer doctor questions, and guide the next clinical review step.",
      },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="glass-panel w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[1.6rem]">
          <div className="flex items-center justify-between border-b border-slate-200/80 bg-[linear-gradient(135deg,#eef5ff_0%,#fffaf4_100%)] px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sky-700 shadow-sm">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Doctor Assistant</p>
                <p className="text-xs text-slate-500">Dummy helper for this dashboard</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[360px] space-y-3 overflow-y-auto bg-white/72 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-3 py-2.5 text-sm leading-6 ${
                  message.role === "bot"
                    ? "surface-inset text-slate-700"
                    : "ml-auto bg-sky-100 text-sky-900"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 transition hover:bg-slate-100"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage(input);
                  }
                }}
                placeholder={placeholder}
                className="h-11 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-600 text-white transition hover:bg-sky-700"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#2b5fb3_0%,#3d78cf_100%)] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(43,95,179,0.28)] transition hover:brightness-105"
      >
        <MessageCircle className="h-4 w-4" />
        Chat
      </button>
    </div>
  );
}
