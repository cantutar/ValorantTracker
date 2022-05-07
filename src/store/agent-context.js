import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AgentsUrl = "https://valorant-api.com/v1/agents";

const agentContext = React.createContext();

export function useAgentsInfo() {
  return useContext(agentContext);
}
export default function AgentContextProvider(props) {
  useEffect(() => {
    async function fetchAgents() {
      await axios
        .get(AgentsUrl)
        .then((res) => setAgents(res.data.data))
        .catch((err) => alert(err));
    }
    fetchAgents();
  }, []);

  const [agents, setAgents] = useState([]);
  const value = { agents, setAgents };
  return (
    <agentContext.Provider value={value}>
      {props.children}
    </agentContext.Provider>
  );
}
