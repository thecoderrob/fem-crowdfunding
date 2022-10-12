import React from "react";

import RadioReward from "./RadioReward";

import { useGlobalContext } from "../context";

const ModalBackProject = ({ rewards, selectedReward, setSelectedReward }) => {
  const { openThankYouModal, closeBackProjectModal, pledge, setPledge } =
    useGlobalContext();
  return (
    <dialog id="modal-back-this-project">
      <div className="container--m-back-project container flow">
        <h2 className="fs-700 title">Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <button className="close-modal" onClick={closeBackProjectModal}>
          <span className="sr-only">Close Popup</span>
        </button>

        {/* Pledge with no reward */}
        <div
          className="grid-container--reward | grid-container"
          data-checked={selectedReward === 1 ? true : false}
          data-disabled="false"
          onClick={() => setSelectedReward(1)}
        >
          <div className="custom-radio"></div>

          <div className="header">
            <h3 className="title">Pledge with no reward</h3>
          </div>

          <p className="desc">
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>

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
                disabled={pledge < 1 ? true : false}
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {rewards.map((reward) => {
          return (
            <RadioReward
              key={reward.id}
              {...reward}
              rewards={rewards}
              selectedReward={selectedReward}
              setSelectedReward={setSelectedReward}
            />
          );
        })}
      </div>
    </dialog>
  );
};

export default ModalBackProject;
