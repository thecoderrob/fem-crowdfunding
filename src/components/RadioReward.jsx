import React, { useState } from "react";

import { useGlobalContext } from "../context";

const RadioReward = ({
  rewards,
  selectedReward,
  setSelectedReward,
  id,
  title,
  req,
  desc,
  itemsLeft,
}) => {
  const { pledge, setPledge } = useGlobalContext();

  const handleSelect = (id) => {
    const selected = rewards.find((reward) => reward.id === id);
    if (selected.itemsLeft < 1) return;

    setSelectedReward(id);
  };

  const openThankYouModal = () => {
    const modalThankYou = document.querySelector("#modal-thank-you");

    modalThankYou.showModal();
  };

  return (
    <div
      className="grid-container--reward | grid-container"
      data-checked={selectedReward === id ? true : false}
      data-disabled={itemsLeft < 1 ? true : false}
      onClick={() => handleSelect(id)}
    >
      <div className="custom-radio"></div>

      <div className="header">
        <h3 className="title">{title}</h3>
        <p className="subtitle">Pledge ${req} or more</p>
      </div>

      <p className="items-left | flex">
        <span>{itemsLeft}</span>
        left
      </p>

      <p className="desc">{desc}</p>

      <div className="pledge-form | grid">
        <label htmlFor="pledge">Enter your pledge</label>
        <div className="input-wrapper | flex">
          <input
            type="number"
            name=""
            id="pledge"
            value={pledge}
            onChange={(e) => setPledge(e.target.value)}
          />
          <button
            className="cta cta--primary"
            onClick={openThankYouModal}
            disabled={pledge < req ? true : false}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadioReward;
