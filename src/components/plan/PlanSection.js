import React from "react";
import PlanInfo from "./PlanInfo";
import EconomyIcon from "../../images/economic.svg";
import SafetyIcon from "../../images/safety.svg";
import CultureIcon from "../../images/culture.svg";
import EducationIcon from "../../images/education.svg";

const PlanSection = () => {
  return (
    <div
      style={{
        marginTop: 75,
        marginBottom: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: 54,
          marginBottom: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        ლელოს{" "}
        <span style={{ marginLeft: 15, color: "#FFCA05" }}>მარშალის გეგმა</span>
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: 1204,
          height: 342,
          gap: 25,
          marginBottom: 120,
        }}
      >
        <PlanInfo icon={EconomyIcon} title="ეკონომიკა" />
        <PlanInfo icon={SafetyIcon} title="უსაფრთხოება" />
        <PlanInfo icon={CultureIcon} title="კულტურა და ჯანდაცვა" />
        <PlanInfo icon={EducationIcon} title="განათლება" />
        <PlanInfo icon={CultureIcon} title="კულტურა და ჯანდაცვა" />
        <PlanInfo icon={EducationIcon} title="განათლება" />
      </div>
      <div
        style={{
          maxWidth: 1580,
          height: 206,
          display: "flex",
          backgroundColor: "#FFCA05",
          borderRadius: 133,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            fontSize: 54,
            color: "#ffffff",
            backgroundColor: "#FFCA05",
            borderTopLeftRadius: 133,
            borderBottomLeftRadius: 133,
            width: "30%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          დონაცია
        </h3>
        <div
          style={{
            width: "70%",
            backgroundColor: "black",
            borderRadius: 133,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 25,
          }}
        >
          <button
            style={{
              border: "3px solid white",
              borderRadius: 41,
              color: "white",
              width: 158,
              height: 81,
              backgroundColor: "black",
              fontSize: 39,
            }}
          >
            10
          </button>
          <button
            style={{
              border: "3px solid white",
              borderRadius: 41,
              color: "white",
              width: 158,
              height: 81,
              backgroundColor: "black",
              fontSize: 39,
            }}
          >
            20
          </button>
          <button
            style={{
              border: "3px solid white",
              borderRadius: 41,
              color: "white",
              width: 158,
              height: 81,
              backgroundColor: "black",
              fontSize: 39,
            }}
          >
            50
          </button>
          <button
            style={{
              border: "3px solid white",
              borderRadius: 41,
              color: "white",
              width: 158,
              height: 81,
              backgroundColor: "black",
              fontSize: 39,
            }}
          >
            100
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
