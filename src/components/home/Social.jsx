import React from "react";
import { Icon } from "@iconify/react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/shardul-gawande-41a518214/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://twitter.com/Shardul_Codes"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://github.com/shardulgawande27"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://leetcode.com/shardul007/"
        className="home__social-icon"
        target="_blank"
      >
        <Icon icon="simple-icons:leetcode" />
      </a>
    </div>
  );
};

export default Social;
