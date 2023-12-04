import "./Input.css";
import { useState } from "react";

const Input = ({ addMessage }) => {
  const [value, setValue] = useState("");

  const getData = async () => {
    const url = "https://random-data-api.com/api/v2/users";
    const res = await fetch(url);
    const data = await res.json();
    return data.id;
  };

  const clickHandler = async () => {
    if (!value) return;
    const data = await getData();
    addMessage(value, true);
    addMessage("`int_a^b f(x)dx=" + data + "`", false);
    setValue("");
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
