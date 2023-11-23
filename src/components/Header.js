import "./Header.css";
import Logo from "./Logo";
import { useState } from "react";
import ToolTip from "./ToolTip";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <div className="header">
      <div className="header_logo-container">
        <Logo />
        <h1 className="header_logo">MATHBOT</h1>
      </div>
      <button
        className="header_btn"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        ?
      </button>
      <ToolTip className={`tool-tip ${isHover ? "show" : ""}`} />
    </div>
  );
};

export default Header;
