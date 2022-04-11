import Wrapper from "../../components/Wrapper/Wrapper";
import "./Agents.module.css";
import { useAgentsInfo } from "../../store/agent-context";
import AgentsDesktop from "../../components/AgentsDesktop/AgentsDesktop";
import React from "react";
import AgentsVideoBack from "../../components/AgentsVideoBack/AgentsVideoBack";
// import { useState } from "react";

export default function AgentsCopy(props) {
  // const [filt, setFilter] = useState("Duelists");
  const { agents } = useAgentsInfo();
  // function onClickHandler(e) {
  //   setFilter(e.target.value);
  // }

  return (
    <>
      <Wrapper>
        <div className="d-flex justify-content-center pt-3">
          <div className="btn-group" role="group" aria-label="filter">
            {["Duelists", "Controllers", "Initiators", "Sentinels"].map(
              (data) => {
                return (
                  <button
                    value={data}
                    // onClick={onClickHandler}
                    key={data}
                    type="button"
                    className="btn btn-primary"
                  >
                    {data}
                  </button>
                );
              }
            )}
          </div>
        </div>
        <div className="container pt-3">
          <div className="row">
            <>
              {agents.map((agent) => {
                return (
                  agent.isPlayableCharacter && (
                    <React.Fragment key={agent.displayName}>
                      <div className="col-md-6 mb-3 d-lg-none">
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
                      <AgentsDesktop
                        agentName={agent.displayName}
                        imgUrl={agent.fullPortraitV2}
                        bgImgUrl={agent.background}
                        desc={agent.description}
                        roleName={agent.role.displayName}
                        roleIcon={agent.role.displayIcon}
                      />
                      <AgentsVideoBack />
                    </React.Fragment>
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
