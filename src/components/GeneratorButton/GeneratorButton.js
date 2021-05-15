import React from "react";
import axios from "axios";
import * as GiIcons from "react-icons/gi";

function GeneratorButton({ activityHandler }) {
  const getActivity = async () => {
    const activityQueryResult = await axios.get(
      `http://www.boredapi.com/api/activity`
    );
    activityHandler(activityQueryResult.data);
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
