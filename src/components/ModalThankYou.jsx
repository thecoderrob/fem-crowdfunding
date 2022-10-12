import React from "react";

import { useGlobalContext } from "../context";

const ModalThankYou = () => {
  const { closeThankYouModal } = useGlobalContext();
  return (
    <dialog id="modal-thank-you">
      <div className="container--m-thank-you | container">
        <img src="/src/assets/icon-check.svg" alt="" />
        <h2 className="fs-700 title">Thanks for your support!</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="cta cta--primary" onClick={closeThankYouModal}>
          Got it!
        </button>
      </div>
    </dialog>
  );
};

export default ModalThankYou;
