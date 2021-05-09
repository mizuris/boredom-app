import React from "react";
import "./App.css";
import axios from "axios";

function App() {

  const generateActivity = async () => {
    const response = await axios.get(
      `http://www.boredapi.com/api/activity`
    );
    console.log(response);
    console.log(response.data);
  };

  return (
    <div className="App">
      <button onClick={() => generateActivity()}>test this</button>
    </div>
  );
}

export default App;
