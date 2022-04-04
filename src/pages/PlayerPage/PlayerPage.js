import PlayerCard from "../../components/PlayerCard/PlayerCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useState } from "react";
const testImageUrl =
  "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png";
export default function PlayerPage(props) {
  const [playerName, setPlayerName] = useState("NEKROFİLİKAISER");

  return (
    <div className="pt-5">
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <PlayerCard testImageUrl={testImageUrl} playerName={playerName} />
            </div>
            <div className="col-md-9">
              <div className="container bg-dark rounded">
                <input
                  placeholder="test input"
                  type="text"
                  value={playerName}
                  onChange={(e) => {
                    setPlayerName(e.target.value);
                  }}
                />
                <h1 className="display-2 text-white">{playerName}</h1>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
