import React from "react";

const headerStyles = {
  height: "64px",
  backgroundColor: "#fbfbfb",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)",
  padding: "8px 16px",
};

const navStyles = {
  height: "100%",
  display: "flex",
  maxWidth: "1140px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  justifyContent: "space-between",
  alignItems: "center",
};

export default function Header() {
  return (
    <header style={headerStyles}>
      <nav style={navStyles}>
        <div className="logo"><img className="logo-img" src="logo.png"></img></div>
        <div className="quiz">
          Boton Al quiz
        </div>        
      </nav>
    </header>
  );
}
