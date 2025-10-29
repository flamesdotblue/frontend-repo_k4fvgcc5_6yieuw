import React, { useState } from 'react';
import { Mic, Paperclip, Send, Smile } from 'lucide-react';

export default function MessageInput({ onSend }) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    const text = value.trim();
    if (!text) return;
    onSend(text);
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-zinc-200 bg-white/70 px-3 py-2 backdrop-blur">
      <div className="flex items-end gap-2">
        <button className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100" aria-label="Emoji picker">
          <Smile className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100" aria-label="Attach file">
          <Paperclip className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Type a message"
            className="max-h-40 w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400"
          />
        </div>
        {value.trim().length === 0 ? (
          <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100" aria-label="Record voice">
            <Mic className="h-5 w-5" />
          </button>
        ) : (
          <button onClick={handleSend} className="rounded-full bg-emerald-500 p-2 text-white hover:bg-emerald-600" aria-label="Send message">
            <Send className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
