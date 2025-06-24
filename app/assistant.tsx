"use client";

import { AssistantRuntimeProvider, useAssistantRuntime } from "@assistant-ui/react";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Assistant = () => {
  const runtime = useChatRuntime({ api: "/api/chat" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <AssistantLayout />
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
};

function AssistantLayout() {
  const { threadList } = useAssistantRuntime();
  const createThread = () => threadList.switchToNewThread();

  return (
    <div className="w-full h-screen flex bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white overflow-hidden">

      {/* Left Sidebar */}
      <aside className="w-64 h-full bg-black border-r border-white/10 flex flex-col p-4">
        <div className="text-green-400 font-bold text-2xl mb-6">Jadu AI</div>

        <button
          onClick={createThread}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded mb-4"
        >
          + New Thread
        </button>

        <div className="flex-1 overflow-y-auto pr-1 space-y-2 text-sm text-zinc-300">
          {/* History items */}
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        <header className="h-16 px-6 flex items-center justify-between border-b border-white/10 shadow bg-white/5 backdrop-blur-sm">
          <h2 className="text-green-500 font-semibold text-xl">Welcome to Jadu AI</h2>
          <span className="text-sm text-zinc-400">Your AI Assistant</span>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-6 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent">
          <div className="max-w-4xl mx-auto bg-white/5 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/10">
            <Thread />
          </div>
        </main>
      </div>
    </div>
  );
}
