import React from "react";
import java from "./../../assets/java.svg";
import js from "./../../assets/javascript.svg";
import ts from "./../../assets/typescript.svg";
import python from "./../../assets/python.svg";

export const Lang = () => {
  return (
    <div className="lang">
      <h2>Programming languages</h2>
      <div className="lang-content">
        <img src={java} alt="" />
        <img src={js} alt="" />
        <img src={ts} alt="" />
        <img src={python} alt="" />
      </div>
    </div>
  );
};
