import { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Vanilla");
  const [darkMode, setDarkMode] = useState(false);
  const [size, setSize] = useState(16);

  const decreaseSize = () => {
    if (size - 5 >= 1) {
      setSize((prev) => prev - 5);
    } else {
      setSize(1);
    }
  };

  const increaseSize = () => {
    if (size + 5 <= 75) {
      setSize((prev) => prev + 5);
    } else {
      setSize(75);
    }
  };

  return (
    <div className="AdDesigner">
      {" "}
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} size={size} darkMode={darkMode} />
      <h3>What to Support</h3>
      <div className="btn-container">
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Chocolate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Strawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div className="btn-container">
        <button onClick={() => setDarkMode(false)} disabled={!darkMode}>
          {" "}
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div className="btn-container">
        <button onClick={() => decreaseSize()} disabled={size === 1}>
          Down
        </button>
        <p>{size}</p>
        <button onClick={() => increaseSize()} disabled={size === 75}>
          Up
        </button>
      </div>
    </div>
  );
};

export default AdDesigner;
