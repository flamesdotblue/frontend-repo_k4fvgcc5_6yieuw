import React, { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

export default function App() {
  const [selectedId, setSelectedId] = useState('1');
  const [store, setStore] = useState({
    '1': [
      { id: 'm1', text: 'Hey! Are we still on for tonight?', time: '5:02 PM', outgoing: false },
      { id: 'm2', text: "Absolutely. Let's meet at the cafe.", time: '5:03 PM', outgoing: true },
      { id: 'm3', text: 'Perfect! See you at 6 ✨', time: '5:04 PM', outgoing: false },
    ],
    '2': [
      { id: 'm4', text: 'Reminder: design review in 10 mins.', time: '3:50 PM', outgoing: false },
      { id: 'm5', text: 'On my way!', time: '3:52 PM', outgoing: true },
    ],
    '3': [
      { id: 'm6', text: "Got your email. I'll reply after lunch.", time: 'Yesterday', outgoing: false },
    ],
  });

  const messages = useMemo(() => store[selectedId] || [], [store, selectedId]);

  const handleSend = (text) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setStore((prev) => ({
      ...prev,
      [selectedId]: [...(prev[selectedId] || []), { id: crypto.randomUUID(), text, time, outgoing: true }],
    }));
  };

  return (
    <div className="h-screen w-screen bg-zinc-100">
      <div className="mx-auto flex h-full max-w-6xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <Sidebar selectedId={selectedId} onSelect={setSelectedId} />
        <section className="flex min-w-0 flex-1 flex-col">
          <ChatHeader name={selectedId === '1' ? 'Alice Johnson' : selectedId === '2' ? 'Team Design' : 'Marcus'} />
          <MessageList messages={messages} />
          <MessageInput onSend={handleSend} />
        </section>
      </div>
    </div>
  );
}
