import React, { useState } from "react";
import "./styles.css";
import "./App.css";
import Display from "./Components/Display";

const App = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  return (
    <div className="App">
      <Display time={time} />
    </div>
  );
};

export default App;
