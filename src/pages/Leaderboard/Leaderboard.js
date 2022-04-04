import { useLeaderBoard } from "../../store/Leaderboard-context";

export default function Leaderboard(props) {
  const { topPlayers } = useLeaderBoard();
  return (
    <>
      <div className="container">
        {topPlayers.map((player) => {
          return (
            <div>
              <p>{player}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
