import React from "react";
import mongo from "./../../assets/mongodb.svg";
import ex from "./../../assets/express.svg";
import react from "./../../assets/react.svg";
import node from "./../../assets/node-js.svg";
import django from "./../../assets/django.svg";
import next from "./../../assets/icons8-nextjs.svg";
import fire from "./../../assets/firebase.svg";

export const Stack = () => {
  return (
    <div className="stack">
      <h2>Tech Stack</h2>
      <div className="stack-content">
        <img src={mongo} alt="" srcset="" />
        <img src={ex} alt="" srcset="" />
        <img src={react} alt="" srcset="" />
        <img src={node} alt="" srcset="" />
        <img src={next} alt="" srcset="" />
        <img src={django} alt="" srcset="" />
        <img src={fire} alt="" />
      </div>
    </div>
  );
};
