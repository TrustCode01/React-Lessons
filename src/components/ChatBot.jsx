import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusCircle } from 'lucide-react';

const biblicalResponses = {
  greetings: [
    "Peace be with you! How may I assist you today?",
    "Greetings in Christ! How can I help you?",
    "Welcome! How can I provide spiritual guidance today?"
  ],
  marriage: {
    general: "Marriage is a sacred covenant. As Ephesians 5:25 teaches us, 'Husbands, love your wives, just as Christ loved the church.'",
    conflict: "The Bible teaches us in Ephesians 4:26-27, 'Do not let the sun go down while you are still angry.' Consider open communication and seeking God's wisdom together.",
    commitment: "Mark 10:9 reminds us, 'Therefore what God has joined together, let no one separate.' Marriage requires dedication, patience, and God's guidance."
  },
  youth: {
    purpose: "Jeremiah 29:11 says, 'For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.'",
    relationships: "2 Timothy 2:22 advises, 'Flee the evil desires of youth and pursue righteousness, faith, love and peace.'",
    decisions: "Proverbs 3:5-6 guides us: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him.'"
  },
  parenting: {
    discipline: "Proverbs 22:6 teaches, 'Train up a child in the way he should go; even when he is old he will not depart from it.'",
    guidance: "Ephesians 6:4 instructs, 'Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.'"
  },
  spiritual_growth: {
    faith: "Hebrews 11:1 tells us, 'Now faith is confidence in what we hope for and assurance about what we do not see.'",
    prayer: "Philippians 4:6-7 encourages, 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.'"
  }
};

function getBiblicalResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Marriage-related responses
  if (lowerMessage.includes('marriage') || lowerMessage.includes('spouse') || lowerMessage.includes('wedding')) {
    if (lowerMessage.includes('problem') || lowerMessage.includes('conflict') || lowerMessage.includes('fight')) {
      return biblicalResponses.marriage.conflict;
    }
    return biblicalResponses.marriage.general;
  }
  
  // Youth-related responses
  if (lowerMessage.includes('young') || lowerMessage.includes('youth') || lowerMessage.includes('teenager')) {
    if (lowerMessage.includes('purpose') || lowerMessage.includes('future')) {
      return biblicalResponses.youth.purpose;
    }
    if (lowerMessage.includes('relationship') || lowerMessage.includes('dating')) {
      return biblicalResponses.youth.relationships;
    }
    return biblicalResponses.youth.decisions;
  }
  
  // Parenting responses
  if (lowerMessage.includes('child') || lowerMessage.includes('parent') || lowerMessage.includes('kid')) {
    if (lowerMessage.includes('discipline') || lowerMessage.includes('behavior')) {
      return biblicalResponses.parenting.discipline;
    }
    return biblicalResponses.parenting.guidance;
  }
  
  // Spiritual growth responses
  if (lowerMessage.includes('faith') || lowerMessage.includes('grow') || lowerMessage.includes('spiritual')) {
    if (lowerMessage.includes('pray') || lowerMessage.includes('prayer')) {
      return biblicalResponses.spiritual_growth.prayer;
    }
    return biblicalResponses.spiritual_growth.faith;
  }
  
  // Default response with a random Bible verse about guidance
  return "Proverbs 3:5-6 reminds us to 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' How else may I assist you with biblical guidance?";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: biblicalResponses.greetings[Math.floor(Math.random() * biblicalResponses.greetings.length)] }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', content: inputMessage };
    const botResponse = { type: 'bot', content: getBiblicalResponse(inputMessage) };

    setMessages([...messages, userMessage, botResponse]);
    setInputMessage('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-800 text-white p-4 rounded-full shadow-lg hover:bg-purple-900 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 w-96 bg-gray-500 rounded-lg shadow-xl transition-all ${isMinimized ? 'h-14' : 'h-[600px]'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold text-gray-800">Biblical Guidance Chat</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-500 hover:text-gray-700"
          >
            <MinusCircle className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-[480px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-purple-800 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask for biblical guidance..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-800 text-white p-2 rounded-lg hover:bg-purple-900 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}