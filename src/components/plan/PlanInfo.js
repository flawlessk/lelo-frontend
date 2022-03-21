import React from "react";

const PlanInfo = ({ icon, title }) => {
  return (
    <div
      style={{
        width: 588,
        borderRadius: 54,
        height: 95,
        backgroundColor: "#FFCA05",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 35,
        cursor: 'pointer',
      }}
    >
      <img style={{ width: 28, height: 34 }} src={icon} alt="icon" />
      <p style={{ color: "white", fontSize: 29 }}>{title}</p>
    </div>
  );
};

export default PlanInfo;
