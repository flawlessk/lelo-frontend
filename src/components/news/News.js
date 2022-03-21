import React from "react";
import Circle from "../../images/yellowCircle.svg";
import NewsCard from "./newsCard/NewsCard";
import Button from "../button/Button";
import './News.css';

const News = (props) => {
  const newsCardsList = props.newsData.map(event => (
    <NewsCard
      id={event.id}
      image={event.image}
      title={event.title}
      description={event.description}
      date={event.date}
    />
  ))
  return (
    <div style={{paddingTop: 85, paddingBottom: 65}}>
      <div style={{ display: "flex", marginBottom: 75 }}>
        <img style={{ marginRight: 30 }} src={Circle} alt="circle" />
        <h2 style={{ fontSize: 54 }}>სიახლეები</h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: 30,
          paddingBottom: 60
        }}
      >
        <div>
         <div style={{display: 'flex', gap: 30}}>{newsCardsList}</div>
        </div>
      </div>
      <Button 
        name='მეტის ნახვა'
        buttonStyle={true}
      />
    </div>
  );
};

export default News;
