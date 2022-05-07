import classes from "./AgentsModal.module.css";

// const testUrl =
//   "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportraitv2.png";

export default function AgentsModal(props) {
  return (
    <>
      <div className="col-lg-12 mb-3 d-none d-lg-block">
        <div className="card bg-dark text-white">
          <h5 className="card-header d-flex align-items-center justify-content-between">
            {props.roleName}
            <img
              src={props.roleIcon}
              alt={props.roleName}
              style={{ width: "1em" }}
            />
          </h5>
          <div className="row">
            <div className="col-md-5 h-100">
              <img
                src={props.imgUrl}
                className={`w-100 ${classes.bannerImageTop}`}
                alt={props.agentName}
              />
              {props.bgImgUrl && (
                <img
                  src={props.bgImgUrl}
                  alt={`${props.agentName}Background`}
                  className={`h-100 ${classes.bannerImageDown}`}
                />
              )}
            </div>
            <div className="col-md-4 d-flex align-self-center">
              <div className="card-body">
                <h1 className={`card-title ${classes.text}`}>
                  {props.agentName}
                </h1>
                <p className="card-text">{props.desc}</p>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-center">
              <button className="btn btn-outline-light">{`Check the ${props.agentName}'s page`}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
