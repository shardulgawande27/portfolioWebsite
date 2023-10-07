import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxs-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>
      </div>
      <div className="about__box">
        <i className="bx bxs-briefcase-alt-2 about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6+ Project</span>
      </div>
      <div className="about__box">
        <i className="bx bx-book about__icon"></i>
        <h3 className="about__title">B.Tech</h3>
        <span className="about__subtitle">
          Artifical Intelligence & Data Science
        </span>
      </div>
    </div>
  );
};

export default Info;
