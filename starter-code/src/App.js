import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Celebrities } from "./components/Contacts";
import { Title } from "./components/Title";

const App = () => (
  <div>
    <Title />
    <Celebrities />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});

export default App;
