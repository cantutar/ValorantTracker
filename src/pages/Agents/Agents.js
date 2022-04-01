import Wrapper from "../../components/Wrapper/Wrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Agents.module.css";

const AgentsUrl = "https://valorant-api.com/v1/agents";

export default function Agents(props) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios
      .get(AgentsUrl)
      .then((res) => setAgents(res.data.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <Wrapper>
        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="filter">
            <button type="button" className="btn btn-danger">
              Left
            </button>
            <button type="button" className="btn btn-warning">
              Middle
            </button>
            <button type="button" className="btn btn-success">
              Right
            </button>
          </div>
        </div>
        <div className="container pt-3">
          <div className="row">
            <>
              {agents.map((agent) => {
                return (
                  agent.isPlayableCharacter && (
                    <div
                      className="col-md-4 col-lg-3 mb-3"
                      key={agent.displayName}
                    >
                      <div className="card h-100">
                        <h5 className="card-header bg-dark text-white d-flex align-items-center justify-content-around">
                          {agent.role.displayName}
                          <img
                            src={agent.role.displayIcon}
                            alt={agent.role.displayName}
                            style={{ width: "1em" }}
                          />
                        </h5>
                        <img
                          src={agent.displayIcon}
                          className="card-img-top img-fluid"
                          alt={agent.displayName}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{agent.displayName}</h5>
                          <p className="card-text">{agent.description}</p>
                        </div>
                        <button
                          className="btn btn-outline-dark"
                          type="button"
                        >{`Check the ${agent.displayName}'s page`}</button>
                      </div>
                    </div>
                  )
                );
              })}
            </>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
