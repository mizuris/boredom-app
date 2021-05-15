import React, { useState } from "react";
import Header from "./components/Header/Header";
import GeneratorButton from "./components/GeneratorButton/GeneratorButton";
import Activity from "./components/Activity/Activity";
import Footer from "./components/Footer/Footer";

function App() {
  const [activity, setActivity] = useState();
  return (
    <div className="App">
      <Header />
      <GeneratorButton activityHandler={setActivity} />
      {activity ? <Activity activity={activity} /> : ""}
      <Footer />
    </div>
  );
}

export default App;
