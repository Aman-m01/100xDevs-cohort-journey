import "./App.css";
// hook
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // define the initial state

  return (
    // now we can use it many times as a component
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

// component
function CustomButton(props) {
  function onClickHandler() {
    // Use props.count instead of count
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;
