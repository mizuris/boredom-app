import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [activity, setActivity] = useState();
  const getActivity = async () => {
    const activityQueryResult = await axios.get(
      `http://www.boredapi.com/api/activity/`
    );
    setActivity(activityQueryResult.data.activity);
  };

  return (
    <div className="App">
      <Header />
      <button onClick={() => getActivity()}>Generate</button>
      {activity ? (
        <div>
          <h1>Your random activity</h1>
          <p>{activity}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
