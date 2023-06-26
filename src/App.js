import { useState } from "react";
import Animals from "./Animals";
import "./Style/App.css";
function App() {
  const RandomElement = ["cow", "bird", "cat", "dog", "gator", "horse"];
  const getRandomElement = () => {
    return RandomElement[Math.floor(Math.random() * RandomElement.length)];
  };

  const [showAnimals, setshowAnimals] = useState([]);
  const handleClick = () => {
    setshowAnimals([...showAnimals, getRandomElement()]);
  };

  const mappinganimals = showAnimals.map((animals, index) => {
    return <Animals type={animals} key={index} />;
  });
  return (
    <div className="App">
      <button className="button" onClick={handleClick}>
        Animals
      </button>
      {/* <p>Animal Count is: {showAnimals}</p> */}
      <div className="Animals-list">{mappinganimals}</div>
    </div>
  );
}

export default App;
