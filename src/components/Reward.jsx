import React from "react";

import { useGlobalContext } from "../context";

const Reward = ({ id, title, req, desc, itemsLeft }) => {
  const { setSelectedReward, openBackProjectModal } = useGlobalContext();

  const handleSetAndOpen = () => {
    setSelectedReward(id);
    openBackProjectModal();
  };

  return (
    <div
      className="container--reward | container flow"
      data-disabled={itemsLeft < 1 ? true : false}
    >
      <div className="flex--header | flex">
        <h3 className="title">{title}</h3>
        <p className="subtitle">Pledge ${req} or more</p>
      </div>

      <p>{desc}</p>

      <div className="flex--footer | flex">
        <p className="items-left | flex">
          <span>{itemsLeft}</span>
          left
        </p>
        <button
          className="cta cta--primary"
          disabled={itemsLeft < 1 ? true : ""}
          onClick={() => handleSetAndOpen()}
        >
          {itemsLeft < 1 ? "Out of Stock" : "Select Reward"}
        </button>
      </div>
    </div>
  );
};

export default Reward;
