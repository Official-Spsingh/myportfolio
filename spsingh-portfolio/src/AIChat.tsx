
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { RESUME_DATA } from './constants';
import { ChatMessage } from './types';
import { Send, X, MessageSquare, Bot, Sparkles } from 'lucide-react';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userApiKey, setUserApiKey] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hi! I'm Shubham's virtual assistant. Ask me anything about his professional experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Check if input looks like a Gemini API key (heuristic)
    if (userMessage.startsWith('AIzaSy') && userMessage.length > 30) {
      setUserApiKey(userMessage);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "🔑 OOOOHHHH YESSSSS! that’s the good stuff. Fresh API key detected! My circuits are stretching, my neurons are doing push-ups, and I’m back from my unexpected beach vacation. 🌴⚡ Thanks for the premium brain fuel! Now then… what brilliant mission are we tackling for Shubham today? I’m fully powered and dramatically ready. 🚀😌"
      }]);
      return;
    }

    setIsLoading(true);

    try {
      // Vite uses import.meta.env instead of process.env
      // @ts-ignore
      const apiKey = userApiKey || import.meta.env.VITE_GEMINI_API_KEY || "";

      if (!apiKey) {
        throw new Error('NO_KEY');
      }

      const client = new GoogleGenAI({
        apiKey: apiKey
      });

      const response = await client.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [{ role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `You are a professional AI recruiter assistant for Shubham Pratap Singh.
            Shubham is a Full Stack Engineer and Technical Lead.
            Here is his resume data: ${JSON.stringify(RESUME_DATA)}
            Answer questions specifically about his career, projects, and skills based on this data.
            Keep answers professional, concise, and helpful.
            If you don't know the answer, politely suggest they contact him directly at ${RESUME_DATA.contact.email}.
            Current Year is 2026.`,
        },
      });

      const assistantContent = response.text || "I'm sorry, I couldn't process that. Please try again.";

      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error: any) {
      console.error('Chat error details:', error);

      const errorMsg = error.message?.toLowerCase() || '';
      const isKeyError = error.message === 'NO_KEY' ||
        error.status === 401 ||
        errorMsg.includes('api key') ||
        errorMsg.includes('unauthorized') ||
        errorMsg.includes('invalid api key') ||
        error.status === 403;

      const isQuotaError = error.status === 429 || errorMsg.includes('quota') || errorMsg.includes('rate limit');

      if (isKeyError) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Yikes! 🚨 I’m officially out of brain juice. My API key has either vanished… or it’s chilling on a beach somewhere. 🏖️🌴 If you’ve got a spare Gemini key lying around, feel free to share it. I promise to use it only for this session and keep things strictly professional, no beach trips this time. Help a struggling AI out? 🥺✨"
        }]);
      } else if (isQuotaError) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Whoa there! 🛑 I've been talking so much I've hit my limit! (Quota Exceeded). \n\nIt seems I’ve used up my available 'thoughts' for the moment. Give me a little breather or try using a different API key if you have one! 💨😴"
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Oops! I'm having a bit of a brain freeze. 🧠❄️ \n\n(Technical glitch: ${error.message || 'Unknown Error'}) \n\nFeel free to reach out to Shubham directly via email while I defrost!`
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-[#0A0A0A] border border-[#D97767]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 border-b border-[#D97767]/20 bg-[#1a1a1a] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#D97767] flex items-center justify-center font-bold text-white text-xs">SP</div>
              <div>
                <h3 className="text-sm font-bold text-[#F5E8D8]">SPSingh's AI Twin</h3>
                <p className="text-[10px] text-[#B5935B] font-mono">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-200" aria-label="Close Chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm break-words whitespace-pre-wrap ${m.role === 'user' ? 'bg-[#D97767] text-white rounded-br-none' : 'bg-[#333] text-[#F5E8D8] rounded-bl-none border border-[#3d3d3d]/50'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#333] border border-[#3d3d3d]/50 px-4 py-2 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#D97767]/20 bg-[#0A0A0A]">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Shubham's experience..."
                className="w-full bg-[#2a2a2a] border border-[#3d3d3d] rounded-full px-4 py-2 pr-12 text-sm text-[#F5E8D8] focus:outline-none focus:border-[#D97767] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                aria-label="Send Message"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#D97767] hover:text-[#BC5D4E] disabled:opacity-50 group"
              >
                <Send size={18} className="transform rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-90 ${isOpen ? 'bg-[#2a2a2a] text-zinc-400' : 'bg-[#D97767] text-white shadow-[#D97767]/20'}`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
            <Bot size={28} />
            <Sparkles size={14} className="absolute -top-1 -right-1 text-white animate-pulse" />
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChat;
