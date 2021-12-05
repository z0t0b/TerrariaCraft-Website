// Custom page/component imports
import About from "./Pages/About/About";
import Download from "./Pages/Download/Download";
import Error from "./Components/Error/Error";
import Home from "./Pages/Home/Home";

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
      if (layoutResponse.data)
        axios
          .get("https://terrariacraft.com/dynamic/json/layout/main", {
            headers: { "Content-Type": "application/json" },
          })
          .then((mainPageLayoutResponse) => {
            if (mainPageLayoutResponse.data)
              axios
                .get("https://terrariacraft.com/dynamic/json/layout/about", {
                  headers: { "Content-Type": "application/json" },
                })
                .then((aboutPageLayoutResponse) => {
                  if (aboutPageLayoutResponse.data)
                    axios
                      .get(
                        "https://terrariacraft.com/dynamic/json/layout/download",
                        {
                          headers: { "Content-Type": "application/json" },
                        }
                      )
                      .then((downloadPageLayoutResponse) => {
                        if (downloadPageLayoutResponse.data)
                          resolve({
                            layoutData: layoutResponse.data,
                            mainPageData: mainPageLayoutResponse.data,
                            aboutPageData: aboutPageLayoutResponse.data,
                            downloadPageData: downloadPageLayoutResponse.data,
                          });
                        else reject();
                      })
                      .catch(() => reject());
                  else reject();
                })
                .catch(() => reject());
            else reject();
          })
          .catch(() => reject());
      else reject();
    })
    .catch(() => reject());
});

fetchData
  .then((data) => {
    // Render website with loaded data
    ReactDOM.render(
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            element={
              <Home
                mainPageData={data.mainPageData}
                layoutData={data.layoutData}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                aboutPageData={data.aboutPageData}
                layoutData={data.layoutData}
              />
            }
          />
          <Route
            path="/download"
            element={
              <Download
                downloadPageData={data.downloadPageData}
                layoutData={data.layoutData}
              />
            }
          />
        </Switch>
      </Router>,
      document.getElementById("root")
    );
  })
  .catch(() => ReactDOM.render(<Error />, document.getElementById("root"))); // Render error overlay
