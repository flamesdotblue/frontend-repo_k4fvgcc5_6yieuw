import React, { useEffect, useRef } from 'react';
import { CheckCheck } from 'lucide-react';

function MessageBubble({ text, time, outgoing }) {
  return (
    <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
      outgoing
        ? 'ml-auto rounded-br-md bg-emerald-500 text-white'
        : 'mr-auto rounded-bl-md bg-white text-zinc-900'
    }`}>
      <p className="whitespace-pre-wrap leading-relaxed">{text}</p>
      <div className={`mt-1 flex items-center gap-1 text-[10px] ${outgoing ? 'text-emerald-50/90' : 'text-zinc-400'}`}>
        <span>{time}</span>
        {outgoing && <CheckCheck className="h-3.5 w-3.5" />}
      </div>
    </div>
  );
}

export default function MessageList({ messages }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={scrollerRef} className="flex-1 space-y-2 overflow-y-auto bg-[url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1742&auto=format&fit=crop')] bg-cover bg-center p-4">
      <div className="pointer-events-none fixed inset-0 bg-white/40 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col gap-2">
        {messages.map((m) => (
          <MessageBubble key={m.id} text={m.text} time={m.time} outgoing={m.outgoing} />
        ))}
      </div>
    </div>
  );
}
