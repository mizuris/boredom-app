import React from "react";
import * as GiIcons from "react-icons/gi";

function GeneratorButton({ activityHandler }) {
  const getActivity = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity");

    if (response.status === 200) {
      await response
        .json()
        .catch((err) => console.log(err))
        .then((data) => activityHandler(data));
    }
  };

  return (
    <div className="generator-button" onClick={getActivity}>
      <span>
        <GiIcons.GiCrosshair className="generator-button-icon" />
        Kill boredom
      </span>
    </div>
  );
}

export default GeneratorButton;
