import "./Display.css";

const Display = ({ messages }) => {
  return (
    <div className="display">
      {messages.map((item) => (
        <div className="display_content">{item}</div>
      ))}
    </div>
  );
};

export default Display;
