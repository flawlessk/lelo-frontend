import React from "react";
import Circle from "../../images/yellowCircle.svg";
import Button from "../button/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 100
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: 560
        }}
      >
        <div style={{ display: "flex", marginBottom: 75 }}>
          <img style={{ marginRight: 30 }} src={Circle} alt="circle" />
          <h2 style={{ fontSize: 54 }}>კონტაქტი</h2>
        </div>
        <div style={{ width: 472, height: 150, marginBottom: 30 }}>
          <p style={{ marginBottom: 25, fontSize: 18 }}>
            სამუშაო განრიგი: ორშაბათი - პარასკევი, 10:00 - 19:00
          </p>
          <p style={{ marginBottom: 25, fontSize: 18 }}>თბილისი, ცენტრალი</p>
          <p style={{ marginBottom: 25, fontSize: 18 }}>
            ტელეფონი <span style={{ color: "#FFCA05" , fontSize: 18}}>032 223 22 88</span>
          </p>
          <p style={{ marginBottom: 25 , fontSize: 18}}>
            ელ.ფოსტა <span style={{ color: "#FFCA05", fontSize: 18 }}>info@lelo2020.com</span>
          </p>
        </div>
        <div style={{ marginBottom: 40 }}>
          <input
            style={{
              border: "none",
              width: 136,
              height: 35,
              backgroundColor: "#FAFAFA",
              borderRadius: 18,
              marginRight: 10,
            }}
            type="text"
            placeholder="სახელი"
          />
          <input
            style={{
              border: "none",
              width: 136,
              height: 35,
              backgroundColor: "#FAFAFA",
              borderRadius: 18,
              marginRight: 10,
            }}
            type="text"
            placeholder="გვარი"
          />
          <input
            style={{
              border: "none",
              width: 242,
              height: 35,
              backgroundColor: "#FAFAFA",
              borderRadius: 18,
            }}
            type="email"
            placeholder="ელ.ფოსტა"
          />
        </div>
        <input
          type="text"
          style={{
            border: "none",
            width: 530,
            height: 76,
            backgroundColor: "#FAFAFA",
            borderRadius: 10,
            marginBottom: 40,
          }}
          placeholder="ტექსტი"
        />
        <Button name="გაგზავნა" />
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/d/embed?mid=134qjUWDIAW2aJWVO2iahYzCln60&ehbc=2E312F"
        width="960"
        height="560"
      ></iframe>
    </div>
  );
};

export default Contact;
