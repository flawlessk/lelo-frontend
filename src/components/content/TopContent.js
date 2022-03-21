import React from "react";
import Button from "../button/Button";
import Circle from "../../images/yellowCircle.svg";

const TopContent = ({ title, image, circle }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {circle ? (
        <div
          style={{
            display: "flex",
            marginBottom: 105,
            justifyContent: "space-between",
            backgroundColor: "#FAFAFA",
            width: "100%",
          }}
        >
          <div
            style={{
              marginTop: 115,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", marginBottom: 20, marginRight: 45 }}>
              <img style={{ marginRight: 30 }} src={Circle} alt="circle" />
              <h2
                style={{
                  width: 392,
                  height: 54,
                  fontSize: 50,
                }}
              >
                {title}
              </h2>
            </div>
            <div
              style={{
                marginBottom: 30,
                fontSize: 18,
                width: 514,
                height: 144,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of
            </div>
            <Button name="ვრცლად" />
          </div>
          <div>
            <img src={image} alt="session" />
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            marginBottom: 40,
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              marginTop: 255,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2
              style={{
                maxWidth: 326,
                height: 210,
                fontSize: 62,
                marginBottom: 20,
                width: "100%",
                display: "flex",
                marginRight: 197,
              }}
            >
              {title}
            </h2>
            <div
              style={{
                marginBottom: 30,
                fontSize: 18,
                width: 514,
                height: 144,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of
            </div>
            <Button name="ვრცლად" />
          </div>
          <div>
            <img src={image} alt="session" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopContent;
