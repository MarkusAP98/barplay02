import React from "react";
import "./Main.css";
import myImage from "../../assets/Main.jpg";
import logo from "../../assets/logo.webp";

const Main = () => {
  return (
    <div className="barplay__main">
      <img src={myImage} className="barplay__main-img" />
      <img src={logo} className="barplay__logo" />
    </div>
  );
};

export default Main;
