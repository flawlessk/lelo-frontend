import React from "react";
import FooterLogo from "../../images/footerLogo.svg";
import FbLogo from "../../images/facebook.svg";
import LinkedinLogo from "../../images/linkedin.svg";
import TwitterLogo from "../../images/twitter.svg";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#221F1F",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: 110,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: 50, marginRight: 160 }}>
        <p>
          <a style={{ color: "#ffffff", fontSize: 15 }} href="#">
            კონტაქტი
          </a>
        </p>
        <p>
          <a style={{ color: "#ffffff", fontSize: 15 }} href="#">
            კონტაქტი
          </a>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: 150,
          gap: 10,
        }}
      >
        <img src={FooterLogo} alt="logo" />
        <p style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>ლელო</p>
      </div>
      <div style={{ display: "flex", gap: 25 }}>
        <img src={FbLogo} alt="fblogo" />
        <img src={LinkedinLogo} alt="lklogo" />
        <img src={TwitterLogo} alt="twitLogo" />
      </div>
    </div>
  );
};

export default Footer;
