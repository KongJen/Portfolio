import React from "react";

const WorkItems = ({ item, onMoreClick }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__img-container">
        <img src={item.image} alt="" className="work__img" />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <div onClick={() => onMoreClick(item.id)} className="work__button">
        More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
    </div>
  );
};

export default WorkItems;
