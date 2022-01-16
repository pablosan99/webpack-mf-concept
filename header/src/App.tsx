import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from './Header';

const App = () => (
  <div className="container">
    <Header />
    <div>Name: header</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
