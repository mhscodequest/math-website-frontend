import "./Body.css";
import Display from "./Display";
import Input from "./Input";
import { useState } from "react";

const Body = () => {
  const [messages, setMessages] = useState([
    { text: "goofball", right: true },
    { text: "display", right: false },
  ]);

  const addMessageHandler = (newMsg, isRight) => {
    setMessages((state) => [...state, { text: newMsg, right: isRight }]);
  };

  return (
    <div className='body'>
      <Display messages={messages} />
      <Input addMessage={addMessageHandler} />
    </div>
  );
};

export default Body;
