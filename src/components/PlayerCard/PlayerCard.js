import classes from "./PlayerCard.module.css";
import overlay from "../../assets/images/overlay.png";

// const testImageUrl =
//   "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png";
export default function PlayerCard(props) {
  return (
    <>
      <div className={`d-flex justify-content-center ${classes.playerCard}`}>
        <h4 className={`text-white ${classes.nick}`}>{props.playerName}</h4>
        <h6 className={`text-white ${classes.title}`}>{props.playerName}</h6>
        <img
          className={`rounded ${classes.image}`}
          src={props.testImageUrl}
          alt=""
          loading="lazy"
        />
        <img
          src={overlay}
          alt=""
          className={`${classes.overlay}`}
          loading="lazy"
        />
      </div>
    </>
  );
}
