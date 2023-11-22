import "./Input.css";

const Input = () => {
  return (
    <div className="input">
      <input placeholder="Enter a math problem..." className="input_input" />
      <button className="input_btn">Calculate</button>
    </div>
  );
};

export default Input;
