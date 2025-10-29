import React from 'react';
import { Plus, Search, MessageCircle } from 'lucide-react';

const chatsMock = [
  {
    id: '1',
    name: 'Alice Johnson',
    message: 'See you at 6! ✨',
    time: '5:21 PM',
    unread: 2,
  },
  {
    id: '2',
    name: 'Team Design',
    message: 'Pushed the new Figma file.',
    time: '4:03 PM',
    unread: 0,
  },
  {
    id: '3',
    name: 'Marcus',
    message: 'That works for me 👍',
    time: 'Yesterday',
    unread: 0,
  },
];

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  const colors = [
    'bg-emerald-500',
    'bg-blue-500',
    'bg-rose-500',
    'bg-amber-500',
    'bg-indigo-500',
  ];
  const color = colors[name.length % colors.length];
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${color}`}>{initials}</div>
  );
}

export default function Sidebar({ selectedId, onSelect }) {
  return (
    <aside className="flex h-full w-full max-w-sm flex-col border-r border-zinc-200 bg-white/60 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-zinc-800">
          <MessageCircle className="h-5 w-5" />
          <span className="font-semibold">Chats</span>
        </div>
        <button className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition hover:bg-zinc-50">
          <Plus className="h-4 w-4" /> New
        </button>
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            className="h-6 w-full bg-transparent outline-none placeholder:text-zinc-400"
            placeholder="Search or start new chat"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chatsMock.map((c) => {
          const active = c.id === selectedId;
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-zinc-50 ${
                active ? 'bg-zinc-50' : ''
              }`}
            >
              <Avatar name={c.name} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate font-medium text-zinc-900">{c.name}</p>
                  <span className="shrink-0 text-xs text-zinc-400">{c.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm text-zinc-500">{c.message}</p>
                  {c.unread > 0 && (
                    <span className="ml-2 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-medium text-white">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
