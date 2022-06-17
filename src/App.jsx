import logo from "../public/logo.svg";
import "./App.css";
import logoBase from "../public/logo-base.svg";
import Button from "./component/Button/Button";
import Counter from "./component/Counter/Counter";
import "./component/Button/style.css";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const handleCounter = () => {
    setNumClics(numClics + 1);
  };

  const handleReset = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="container-base">
        <img className="logo-page" src={logoBase} alt="Logo Page" />
      </div>
      <Counter numClics={numClics} />
      <div className="container-counter">
        <Button
          text="Add counter"
          style="style-button-counter"
          event={handleCounter}
        />
        <Button
          text="Reset counter"
          style="style-button-reset"
          event={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
