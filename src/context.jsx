import React, { useState, useContext } from "react";
import { data } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [pledge, setPledge] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [rewards, setRewards] = useState(data);
  const [selectedReward, setSelectedReward] = useState(null);

  const openBackProjectModal = () => {
    const modal = document.querySelector("#modal-back-this-project");

    modal.showModal();
  };
  const closeBackProjectModal = () => {
    const modal = document.querySelector("#modal-back-this-project");

    modal.close();
  };
  const openThankYouModal = () => {
    const modal = document.querySelector("#modal-thank-you");

    modal.showModal();
  };
  const closeThankYouModal = () => {
    const modal = document.querySelector("#modal-thank-you");

    modal.close();
  };

  return (
    <AppContext.Provider
      value={{
        pledge,
        setPledge,
        isBookmarked,
        setIsBookmarked,
        rewards,
        setRewards,
        selectedReward,
        setSelectedReward,
        openBackProjectModal,
        closeBackProjectModal,
        openThankYouModal,
        closeThankYouModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
