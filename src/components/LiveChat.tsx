
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Welcome to SaiTrackSolutions! How can we help you with your logistics needs today?", isAgent: true },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { id: Date.now(), text: message, isAgent: false }]);
    setMessage("");
    
    // Simulate agent response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now() + 1, 
          text: "Thank you for your message. One of our support agents will get back to you shortly.", 
          isAgent: true 
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <Button 
        className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-white text-brand-dark' : 'bg-brand-orange text-white'}`}
        onClick={toggleChat}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
      
      {/* Chat panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in">
          <div className="bg-brand-orange p-4 text-white">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold">Customer Support</h3>
                <p className="text-xs text-white/80">Typically replies in a few minutes</p>
              </div>
            </div>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-4 flex ${msg.isAgent ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isAgent 
                      ? 'bg-white text-gray-800 shadow-sm' 
                      : 'bg-brand-orange text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={sendMessage} className="p-3 border-t flex gap-2">
            <Input 
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
