// Custom page/component imports
import Error from "./Components/Error/Error";
import PageLayout from "./Components/PageLayout/PageLayout";

// Package imports
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Site CSS import
import "./index.css";

// Render loading bars first
ReactDOM.render(
  <div className="w-screen h-screen flex items-center justify-center">
    <Loader type="ThreeDots" color="#4b960e" height={120} width={120} />
  </div>,
  document.getElementById("root")
);

const fetchData = new Promise((resolve, reject) => {
  axios
    .get("https://terrariacraft.com/dynamic/json/layout/_layout", {
      headers: { "Content-Type": "application/json" },
    })
    .then((layoutResponse) => {
      if (layoutResponse.data) {
        const layoutArray = [];
        layoutResponse.data?.header?.tabs
          .filter((tab) => tab.layout)
          .map((tab, i) =>
            axios
              .get(tab.layout, {
                headers: { "Content-Type": "application/json" },
              })
              .then((response) => {
                if (response.data) {
                  layoutArray.push({
                    link: tab.link,
                    layout: response.data,
                  });
                  if (
                    i ===
                    layoutResponse.data.header.tabs.filter((tab) => tab.layout)
                      .length -
                      1
                  ) {
                    resolve({
                      layoutData: layoutResponse.data,
                      layoutArray: layoutArray,
                    });
                  }
                }
              })
              .catch((err) => console.error(err) && reject())
          );
      }
    })
    .catch((err) => console.error(err) && reject());
});

fetchData
  .then((data) => {
    // Render website with loaded data
    ReactDOM.render(
      <Router>
        <Switch>
          {data.layoutArray.map((layout, i) => (
            <Route
              key={layout.link + "_" + i}
              exact={layout.link === "/"}
              path={layout.link}
              element={
                <PageLayout
                  pageData={layout.layout}
                  layoutData={data.layoutData}
                />
              }
            />
          ))}
        </Switch>
      </Router>,
      document.getElementById("root")
    );
  })
  .catch(() => ReactDOM.render(<Error />, document.getElementById("root"))); // Render error overlay
