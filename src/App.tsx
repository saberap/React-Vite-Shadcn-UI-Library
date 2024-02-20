import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CardSlider  from "@/components/ui/card-slider";
import CreditCard from "./components/ui/credit-card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex flex-row justify-center">
      <CardSlider/>
      </div>
    </div>
  );
}

export default App;
