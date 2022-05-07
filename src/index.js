import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AgentContextProvider from "./store/agent-context";
import WeaponContextProvider from "./store/weapon-context";
import { BrowserRouter as Router } from "react-router-dom";
import LeaderboardContextProvider from "./store/Leaderboard-context";
import "./assets/css/main.min.css";
import "./assets/css/styles.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <LeaderboardContextProvider>
      <AgentContextProvider>
        <WeaponContextProvider>
          <App />
        </WeaponContextProvider>
      </AgentContextProvider>
    </LeaderboardContextProvider>
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
