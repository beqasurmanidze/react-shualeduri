import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("neutral");
  const [hunger, setHunger] = useState(40);
  const [cleanliness, setCleanliness] = useState(100);
  const [happiness, setHappiness] = useState(40);

  const feedPet = () => {
    setHunger((prev) => (prev - 10 >= 0 ? prev + 10 : 0));
    setStatus("fed");
    setCleanliness((prev) => prev - 20);
  };

  const playWithPet = () => {
    setHappiness((prev) => (prev + 10 <= 100 ? prev + 10 : 100));
    setStatus("playing");
  };

  const cleanPet = () => {
    setCleanliness(100);
    setHappiness((prev) => (prev + 5 <= 100 ? prev + 5 : 100));
    setStatus("clean");
  };

  const increaseHunger = () => {
    setHunger((prev) => (prev + 10 <= 100 ? prev - 5 : 100));
  };

  const getStatus = () => {
    if (hunger <= 0) {
      return "not hungry";
    } else if (hunger > 80) {
      return "very hungry";
    } else if (cleanliness <= 0) {
      return "dirty";
    } else {
      return status;
    }
  };

  return (
    <div>
      <h1>Pet's status: {getStatus()}</h1>
      <button
        onClick={() => {
          feedPet();
          increaseHunger();
        }}
      >
        Feed Pet
      </button>
      <button
        onClick={() => {
          playWithPet();
          increaseHunger();
        }}
      >
        Play with Pet
      </button>
      <button
        onClick={() => {
          cleanPet();
          increaseHunger();
        }}
      >
        Clean Pet
      </button>
      <p>Hunger: {hunger}</p>
      <p>Cleanliness: {cleanliness}</p>
      <p>Happiness: {happiness}</p>
    </div>
  );
}

export default App;
