import { useState } from "react";
import "./ChatWidget.css";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can we help you today?" }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { from: "user", text: message }]);
    setMessage("");

    // Mock auto reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Thanks for contacting us. Our team will reply shortly." }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Icon */}
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Customer Support</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.from}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;