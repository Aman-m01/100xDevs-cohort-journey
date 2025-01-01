/*
create a react app that has a prop and render it inside a div , the top level app components renders 2 Headers

*/
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Aman");

  function updateData() {
    setTitle("title is: " + Math.random() * 1);
  }
  return (
    <div>
      <button onClick={updateData}>Change the title</button>
      <Header title={title}></Header>
      <Header title="other"></Header>
      <Header title="other"></Header>
      <Header title="other"></Header>
    </div>
  );
}

// object desctructuring
const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});
export default App;
