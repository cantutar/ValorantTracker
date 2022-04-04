import classes from "./PlayerCard.module.css";
import overlay from "../../assets/images/overlay.png";
import { useState } from "react";

const testImageUrl =
  "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png";
export default function PlayerCard(props) {
  const [playerName, setPlayerName] = useState("NEKROFİLİKAISER");
  return (
    <>
      <div className="pt-5">
        <div className="row">
          <div className="col-md-2">
            <div className="d-flex justify-content-center">
              <h4 className={`text-white ${classes.nick}`}>{playerName}</h4>
              <h6 className={`text-white ${classes.title}`}>{playerName}</h6>
              <img
                className={`rounded ${classes.image}`}
                src={testImageUrl}
                alt=""
              />
              <img src={overlay} alt="" className={`${classes.overlay}`} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="container bg-dark rounded">
              <input
                placeholder="test input"
                type="text"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
              />
              <h1 className="display-2">{playerName}</h1>
            </div>
          </div>
          <div className="col-md-2">
            <img src={testImageUrl} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
