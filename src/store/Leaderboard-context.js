import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const url = `https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/d929bc38-4ab6-7da4-94f0-ee84f8ac141e?size=200&startIndex=0&api_key=${process.env.REACT_APP_API_KEY}`;
const LeaderboardContext = React.createContext();

export function useLeaderBoard() {
  return useContext(LeaderboardContext);
}

export default function LeaderboardContextProvider(props) {
  const [topPlayers, setTopPlayers] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => alert(err));
  // }, []);
  const value = { topPlayers };
  return (
    <LeaderboardContext.Provider value={value}>
      {props.children}
    </LeaderboardContext.Provider>
  );
}
