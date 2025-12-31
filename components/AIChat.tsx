
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types.ts';
import { sendMessageStream } from '../services/geminiService.ts';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'model',
      text: "Hello! I'm Dr. Akdeniz's assistant. How can I help you learn about his work?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const aiMessageId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: aiMessageId,
      role: 'model',
      text: '', 
      timestamp: new Date()
    }]);

    try {
      const stream = sendMessageStream(userMessage.text);
      let fullResponse = '';
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessageId ? { ...msg, text: fullResponse } : msg
        ));
      }
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 p-5 rounded-full bg-white text-black shadow-2xl hover:scale-110 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <div 
        className={`fixed bottom-8 right-8 z-50 w-[90vw] md:w-[380px] h-[550px] bg-[#111111] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        <div className="p-5 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3 text-black">
            <Sparkles className="w-5 h-5 text-cyan-600" />
            <h3 className="font-bold text-sm tracking-tight uppercase">Portfolio AI</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-[#1a1a1a] text-slate-300 border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1].role === 'user' && (
             <div className="flex justify-start">
               <div className="bg-[#1a1a1a] p-3 rounded-2xl flex items-center gap-2">
                 <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-5 bg-[#111111] border-t border-white/5">
          <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-xl px-4 py-3 border border-white/10 focus-within:border-white/30 transition-all">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-white placeholder-slate-600 text-sm focus:outline-none"
            />
            <button type="submit" disabled={isLoading || !input.trim()} className="text-white hover:text-cyan-400 disabled:opacity-30">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
