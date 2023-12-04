import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { MathJaxContext } from "better-react-mathjax";

function App() {
  const config = {
    loader: { load: ["input/asciimath"] }
  };

  return (
    <MathJaxContext config={config}>
      <div className='App'>
        <Header />
        <Body />
      </div>
    </MathJaxContext>
  );
}

export default App;
