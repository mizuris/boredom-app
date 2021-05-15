import React, { useState } from "react";
import Header from "./components/Header/Header";
import axios from "axios";
import Activity from "./components/Activity/Activity";
// import Footer from "./components/Footer/Footer";
import * as GiIcons from "react-icons/gi";

function App() {
  const [activity, setActivity] = useState();

  const getActivity = async () => {
    const activityQueryResult = await axios.get(
      `http://www.boredapi.com/api/activity`
    );
    setActivity(activityQueryResult.data);
  };

  return (
    <div className="App">
      <Header />
      <button className="generator-button" onClick={() => getActivity()}>
        <span>
          <GiIcons.GiCrosshair className="generator-button-icon" />
          Kill boredom
        </span>
      </button>
      {activity ? <Activity activity={activity} /> : ""}
    </div>
  );
}

export default App;
