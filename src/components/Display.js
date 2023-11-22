import "./Display.css";

const Display = ({ messages }) => {
  return (
    <div className='display'>
      {messages.map(({ text, right }) => (
        <div className={`display_wrapper ${right ? "right" : ""}`}>
          <div className='display_content'>
            {text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
