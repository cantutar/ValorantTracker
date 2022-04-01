import React, { useState, useContext, useCallback } from "react";
import axios from "axios";

const AgentsUrl = "https://valorant-api.com/v1/agents";

const agentContext = React.createContext();

export function useAgentsInfo() {
  return useContext(agentContext);
}
export default function AgentContextProvider(props) {
  const agentFetcher = useCallback(() => {
    agentsInfoHandler();
  }, []);

  function agentsInfoHandler() {
    axios
      .get(AgentsUrl)
      .then((res) => setAgents(res.data.data))
      .catch((err) => alert(err));
  }

  const [agents, setAgents] = useState([]);
  const value = { agents, setAgents, agentFetcher };
  return (
    <agentContext.Provider value={value}>
      {props.children}
    </agentContext.Provider>
  );
}
