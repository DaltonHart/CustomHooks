import React from "react";

import Random from "./components/Random_V1";
import Tag from "./components/Tag_V1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Random Pokemon Application</h1>
      <div>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
