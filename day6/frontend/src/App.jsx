import React from "react";
import Register from "./components/register";
import Update from "./components/update";
import View from "./components/view";
import "./App.css";
import Delete from "./components/delete";
const App = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "greenyellow" }}>
        User Registration System
      </h1>

      <Delete />
      <Update />
      <View />
      <Register />
    </div>
  );
};

export default App;
