import "./Body.css";
import Display from "./Display";
import Input from "./Input";
import { useState } from "react";

const Body = () => {
  const [messages, setMessages] = useState(["display", "goofball"]);

  const addMessageHandler = (newMsg) => {
    setMessages((state) => state.push(newMsg));
  };

  return (
    <div className="body">
      <Display messages={messages} />
      <Input addMessage={addMessageHandler} />
    </div>
  );
};

export default Body;
