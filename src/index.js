import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./Pages/About/About";
import Download from "./Pages/Download/Download";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/download" element={<Download />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
