import React, { useState } from "react";
import "./styles.css";
import "./App.css";

const App = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
    </div>
  );
};

export default App;
