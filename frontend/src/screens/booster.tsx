import axios from "axios";
import React, { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export const Booster: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const handleSendMessage = async () => {
    const messageId = new Date().getTime();
    const userMessage: Message = {
      id: messageId,
      text: inputText,
      sender: "user",
    };
    setMessages([...messages, userMessage]);
    setInputText("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are an assistant specialized in technology. You only respond to technology-related questions. For any other question, please ask another assistant.",
            },

            {
              role: "user",
              content: "Hello!",
            },
          ],
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );

      const botMessage: Message = {
        id: messageId + 1,
        text: response.data.choices[0].text,
        sender: "bot",
      };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex flex-col space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`text-white p-2 rounded ${
              message.sender === "user" ? "bg-blue-500 ml-auto" : "bg-green-500"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border p-2 w-full"
          placeholder="Type your message here..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};
