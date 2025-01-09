import { useState } from "react";
import "./App.css";
import Signin2 from "./components/signin2";
import Signin1 from "./components/signin1";
import Herosection from "./components/herosection";
import Select from "./components/select";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-hidden">
        <Select></Select>
      </div>
    </>
  );
}

export default App;
