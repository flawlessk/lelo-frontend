import React from "react";
import Circle from "../../images/yellowCircle.svg";
import TeamCard from "./teamCard/TeamCard";
import Button from "../button/Button";
import './Team.css';

const Team = (props) => {
  const teamCardList = props.teamsData.map(event => (
    <TeamCard 
      image={event.image}
      title={event.title}
      description={event.description}
    />
  ))
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 75 }}>
        <img style={{ marginRight: 30 }} src={Circle} alt="circle" />
        <h2 style={{ fontSize: 54 }}>ჩვენი გუნდი</h2>
      </div>
      <div style={{ display: "flex", gap: 25, paddingBottom: 60 }}>
        {teamCardList}
      </div>
      <Button name="მეტის ნახვა" buttonStyle={true} />
      <div style={{ display: "flex", marginTop: 70, gap: 25, justifyContent: 'center'}}>
        <div className="organization-wrapper">
          <p className="choose-organization">ქალთა ორგანიზაცია</p>
        </div>
        <div className="organization-wrapper">
          <p className="choose-organization">
            ახალგაზრდული ორგანიზაცია
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
