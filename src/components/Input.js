import "./Input.css";
import { useState, useEffect } from "react";

const Input = ({ addMessage }) => {
  const [value, setValue] = useState("");
  // backend testing stuff
  const [testStuff, setTestStuff] = useState("test");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = "https://random-data-api.com/api/v2/users";
    const res = await fetch(url);
    const data = await res.json();
    setTestStuff(data.id);
  };

  const clickHandler = () => {
    addMessage(getData());
  };

  return (
    <div className="input">
      <input
        placeholder="Enter a math problem..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="input_btn" onClick={clickHandler}>
        Calculate
      </button>
    </div>
  );
};

export default Input;
