import "./Display.css";
import { MathJax } from "better-react-mathjax";

const Display = ({ messages }) => {
  return (
    <div className='display'>
      {messages.map(({ text, right }) => (
        <div className={`display_wrapper ${right ? "right" : ""}`}>
          <div className='display_content'>
            <MathJax>{text}</MathJax>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
