import React from 'react';
import { MoreVertical, Phone, Search, Video } from 'lucide-react';

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
      {initials}
    </div>
  );
}

export default function ChatHeader({ name = 'Alice Johnson', status = 'online' }) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 bg-white/70 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-3">
        <Avatar name={name} />
        <div>
          <p className="font-medium text-zinc-900">{name}</p>
          <p className="text-xs text-zinc-500">{status === 'online' ? 'online' : status}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-zinc-600">
        <button className="rounded-lg p-2 hover:bg-zinc-100" aria-label="Search in chat">
          <Search className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 hover:bg-zinc-100" aria-label="Voice call">
          <Phone className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 hover:bg-zinc-100" aria-label="Video call">
          <Video className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 hover:bg-zinc-100" aria-label="More options">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
