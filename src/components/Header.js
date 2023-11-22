import "./Header.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo-container">
        <Logo />
        <h1 className="header_logo">MATHBOT</h1>
      </div>
      <button className="header_btn">?</button>
    </div>
  );
};

export default Header;
