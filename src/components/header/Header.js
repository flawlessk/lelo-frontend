import React from "react";
import Logo from "../../images/logo.svg";
import LanguageIcon from "../../images/language.svg";
import "./Header.css";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        marginTop: 50,
        justifyContent: 'flex-end',
        width: '100%'
      }}
    >
      <div style={{ marginRight: 60 }}>
        <img src={Logo} alt="logo" />
      </div>
      <div
        style={{
          borderTopLeftRadius: 45,
          borderBottomLeftRadius: 45,
          backgroundColor: "#FFCA05",
          display: "flex",
          height: 84,
          verticalAlign: "center",
          alignItems: "center",
          width: 1564,
        }}
      >
        <img
          style={{ width: 30, height: 30, marginRight: 155, marginLeft: 30 }}
          src={LanguageIcon}
          alt="lang-icon"
        />
        <nav>
          <ul style={{ display: "flex" }}>
            <li style={{ paddingRight: 70, fontSize: 16 }}>
              <a style={{ color: "white" }} href="#">
                მთავარი
              </a>
            </li>
            <li style={{ paddingRight: 70 }}>
              <a style={{ color: "white" }} href="#">
                სიახლეები
              </a>
            </li>
            <li style={{ paddingRight: 70 }}>
              <a style={{ color: "white" }} href="#">
                სტრუქტურა
              </a>
            </li>
            <li style={{ paddingRight: 70 }}>
              <a style={{ color: "white" }} href="#">
                წესდება
              </a>
            </li>
            <li style={{ paddingRight: 70 }}>
              <a style={{ color: "white" }} href="#">
                არჩევნები
              </a>
            </li>
            <li
              style={{
                marginRight: 14,
                borderRadius: 50,
                backgroundColor: "white",
              }}
            >
              <a style={{ color: "black" }} href="#">
                დონაცია
              </a>
            </li>
            <li style={{ borderRadius: 50, backgroundColor: "black" }}>
              <a style={{ color: "white" }} href="#">
                შემოგვიერთდი
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
