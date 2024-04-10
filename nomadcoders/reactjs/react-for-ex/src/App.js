import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");

  const iRunOnce = () => {
    console.log("api starts.");
  };
  useEffect(iRunOnce, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me.</button>
    </div>
  );
}

export default App;
