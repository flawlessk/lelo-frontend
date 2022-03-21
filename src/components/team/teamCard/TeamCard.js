import React from "react";

const TeamCard = ({ image, title, description }) => {
  return (
    <div className="single-card">
      <img style={{marginBottom: 25}} src={image} alt="teamMember" />
      <h3 style={{marginBottom: 10, marginLeft: 25}}>{title}</h3>
      <p style={{marginBottom: 25, marginLeft: 25}}>{description}</p>
      <p style={{ color: "#FFCA05", fontSize: 20, cursor: "pointer", marginLeft: 25}}>
        Read More
      </p>
    </div>
  );
};

export default TeamCard;
