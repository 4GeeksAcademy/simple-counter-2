import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10;
  }

  React.useEffect(() => {});

  return (
    <div>
      <SimpleCounter
        thousandsDigit={calculateSeconds(counter, 1000)}
        hundredsDigit={calculateSeconds(counter, 100)}
        tensDigit={calculateSeconds(counter, 10)}
        onesDigit={calculateSeconds(counter, 1)}
      />
    </div>
  );
}

export default App;
