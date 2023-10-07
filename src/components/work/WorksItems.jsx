import React from "react";

export const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {item.link != null ? (
        <a href={item.link} className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : null}
      {item.code != null ? (
        <a href={item.code} className="work__button">
          Code <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      ) : null}
    </div>
  );
};
