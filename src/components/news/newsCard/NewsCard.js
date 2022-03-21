import React from "react";
import Date from "../../../images/date.svg";
import './NewsCard.css';

const NewsCard = ({ image, title, description, date }) => {
  return (
        <div className="single-card" style={{ width: 378, height: 610, position: "relative", borderRadius: 25 }}>
      <div
        style={{
          position: "absolute",
          left: 35,
          top: -20,
          width: 307,
          height: 42,
          backgroundColor: "#FFCA05",
          borderRadius: 21,
        }}
      ></div>
      <img style={{ marginBottom: 10 }} src={image} alt="cardimg" />
      <div style={{ marginBottom: 20, marginLeft: 30, display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={Date} alt="date" />
        <p>{date}</p>
      </div>
      <div style={{ marginLeft: 30 }}>
        <h3 style={{ marginBottom: 45, fontSize: 28 }}>{title}</h3>
        <p style={{ marginBottom: 35, fontSize: 18 }}>{description}</p>
        <p style={{ color: "#FFCA05", fontSize: 20, cursor: "pointer" }}>
          Read More
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
