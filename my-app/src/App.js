import { useEffect } from "react";
import { useState } from "react";

import Button from "./Button";
function Hello() {
  useEffect(() => {
    console.log("created:)");
    return () => {
      console.log("destroyed:(");
    };
  }, []);
  return (
    <div>
      <h2>Hello</h2>
      <hr />
    </div>
  );
}

function App() {
  useEffect(() => {
    console.log("Load API...");
  }, []);

  const [showing, setShowing] = useState(false);
  const changeShowing = () => {
    setShowing((prev) => !prev);
    return;
  };

  return (
    <div className="App">
      {showing ? null : <Hello />}
      <button onClick={changeShowing}>{showing ? "Show" : "Hide"}</button>
      <Button text="Click me." />
    </div>
  );
}

export default App;
