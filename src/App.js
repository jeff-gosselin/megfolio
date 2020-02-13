import React from "react";
import logo from "./MLogo.svg";
import Nav from "./Nav";
import Main from "./Main";
import "./scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
};

export default App;
