import PlayerCard from "../../components/PlayerCard/PlayerCard";
import Wrapper from "../../components/Wrapper/Wrapper";

export default function PlayerPage(props) {
  return (
    <>
      <Wrapper>
        <div className="container-fluid">
          <PlayerCard></PlayerCard>
        </div>
      </Wrapper>
    </>
  );
}
