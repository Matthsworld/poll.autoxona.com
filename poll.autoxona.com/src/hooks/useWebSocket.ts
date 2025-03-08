import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => socket.close();
  }, ["ws://localhost:5000"]);

  return messages;
};


export default useWebSocket;