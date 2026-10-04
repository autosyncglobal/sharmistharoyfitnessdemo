import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatbotSupportProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const ChatbotSupport: React.FC<ChatbotSupportProps> = ({
  isOpen,
  onClose,
  onOpen,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Welcome to Sharmistha Roy Fitness. How may I assist your fitness journey today? You can inquire about our tailored programs, beginner guidance for women, or schedule a private consultation.",
      timestamp: 'Just now',
      quickReplies: [
        'What programs are available?',
        'Can complete beginners join?',
        'How does 1-on-1 coaching work?',
        'How do I reach Sharmistha?',
      ],
    },
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const getBotResponse = (query: string): { text: string; actionLink?: string; actionText?: string; quickReplies?: string[] } => {
    const q = query.toLowerCase();

    if (q.includes('program') || q.includes('service') || q.includes('options')) {
      return {
        text: "Coach Sharmistha Roy curates four signature offerings:\n\n1. Weight Management & Metabolic Tone\n2. Progressive Strength & Form\n3. Empowered Beginner Foundation\n4. Bespoke 1-on-1 Personal Mentorship\n\nEach protocol is customized around your schedule and biology.",
        quickReplies: ['Weight Management', 'Beginner Foundation', '1-on-1 Mentorship'],
        actionLink: 'https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20know%20more%20about%20your%20programs.',
        actionText: 'Enquire on WhatsApp',
      };
    }

    if (q.includes('beginner') || q.includes('start') || q.includes('new') || q.includes('first')) {
      return {
        text: "Beginners are warmly welcomed! Sharmistha specializes in progressive, zero-intimidation coaching that teaches safe biomechanics, builds posture, and fosters genuine body confidence.",
        actionLink: 'https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20am%20a%20beginner%20and%20want%20to%20get%20started.',
        actionText: 'Connect on WhatsApp',
      };
    }

    if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('reach') || q.includes('number')) {
      return {
        text: "You can reach Coach Sharmistha Roy directly via Phone or WhatsApp at +91 9123096061. She reviews client inquiries personally.",
        actionLink: 'https://wa.me/919123096061',
        actionText: 'Open WhatsApp Directly',
      };
    }

    if (q.includes('book') || q.includes('schedule') || q.includes('consult') || q.includes('appointment')) {
      return {
        text: "You can reserve a Private Discovery Call directly using our on-page scheduler, or message Sharmistha immediately on WhatsApp.",
        actionLink: '#booking',
        actionText: 'Go to Booking Scheduler',
      };
    }

    if (q.includes('weight') || q.includes('diet') || q.includes('food') || q.includes('nutrition')) {
      return {
        text: "Sharmistha's nutrition philosophy rejects extreme starvation and rigid rules. We create joyful, nourishing habits that fit family meals, social dinners, and long-term metabolic health.",
        actionLink: 'https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20am%20interested%20in%20sustainable%20weight%20management.',
        actionText: 'Discuss Nutrition Goals',
      };
    }

    return {
      text: "Thank you for reaching out. For bespoke guidance tailored to your lifestyle and goals, Coach Sharmistha Roy is available directly on WhatsApp at +91 9123096061.",
      actionLink: `https://wa.me/919123096061?text=${encodeURIComponent(`Hello Sharmistha, I had an inquiry: ${query}`)}`,
      actionText: 'Message Sharmistha',
      quickReplies: ['What programs are available?', 'Can complete beginners join?', 'How do I reach Sharmistha?'],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input.trim();
    if (!messageText) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse.text,
        timestamp: 'Just now',
        quickReplies: botResponse.quickReplies,
        actionLink: botResponse.actionLink,
        actionText: botResponse.actionText,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Concierge Button */}
      <button
        onClick={isOpen ? onClose : onOpen}
        className="fixed bottom-7 left-7 z-40 p-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#1C1816] text-[#1C1816] hover:text-[#FAF8F5] border border-[#EAE4DC] shadow-[0_4px_20px_rgba(28,24,22,0.08)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer"
        aria-label="Open Fitness Concierge"
      >
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#AF8B62]" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#AF8B62] rounded-full" />
        </div>
        <span className="text-xs font-medium tracking-wide pr-1 hidden sm:inline">
          Coaching Concierge
        </span>
      </button>

      {/* Concierge Modal */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 sm:left-7 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[550px] h-[520px] bg-[#FAF8F5] border border-[#EAE4DC] rounded-3xl shadow-[0_20px_50px_rgba(28,24,22,0.15)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-white border-b border-[#EAE4DC] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1C1816] text-[#FAF8F5] flex items-center justify-center font-serif text-sm">
                SR
              </div>
              <div>
                <p className="font-serif text-base text-[#1C1816] leading-none">Sharmistha Roy</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-[10px] uppercase tracking-wider text-[#786F66]">Concierge Active</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#786F66] hover:text-[#1C1816] hover:bg-[#F5F1EB] transition-colors"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FAF8F5]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1C1816] text-[#FAF8F5] font-light rounded-br-none'
                      : 'bg-white text-[#1C1816] border border-[#EAE4DC] rounded-bl-none shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line font-light">{msg.text}</p>

                  {/* Optional Action Link inside bot message */}
                  {msg.actionLink && msg.actionText && (
                    <div className="mt-3 pt-3 border-t border-[#F0EBE3]">
                      {msg.actionLink.startsWith('#') ? (
                        <a
                          href={msg.actionLink}
                          onClick={onClose}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#AF8B62] hover:underline"
                        >
                          <span>{msg.actionText}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <a
                          href={msg.actionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-[11px] font-medium tracking-wide transition-colors"
                        >
                          <span>{msg.actionText}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Quick replies */}
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.quickReplies.map((qr, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(qr)}
                        className="text-[11px] px-3 py-1 rounded-full bg-white hover:bg-[#1C1816] hover:text-[#FAF8F5] border border-[#EAE4DC] text-[#524B45] transition-colors text-left"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 text-[#AF8B62] text-xs pl-2">
                <span className="w-1.5 h-1.5 bg-[#AF8B62] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#AF8B62] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#AF8B62] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick WhatsApp Handover bar */}
          <div className="px-4 py-2.5 bg-[#F5F1EB] border-t border-[#EAE4DC] flex items-center justify-between text-[11px] text-[#786F66]">
            <span>Direct WhatsApp: <strong className="text-[#1C1816] font-medium">+91 9123096061</strong></span>
            <a
              href="https://wa.me/919123096061"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AF8B62] hover:text-[#1C1816] font-medium"
            >
              Open WhatsApp &rarr;
            </a>
          </div>

          {/* Input Footer */}
          <div className="p-3.5 bg-white border-t border-[#EAE4DC]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about programs, schedule..."
                className="flex-1 bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-3.5 py-2.5 text-xs text-[#1C1816] placeholder-[#A69C92] focus:outline-none focus:border-[#1C1816] transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] transition-colors shrink-0 disabled:opacity-50"
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};
