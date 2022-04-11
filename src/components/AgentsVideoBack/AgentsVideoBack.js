import Background from "../../assets/videos/char.webm";
import Slider from "../Slider/Slider";
import classes from "./AgentsVideoBack.module.css";

export default function AgentsVideoBack(props) {
  return (
    <>
      <div>
        <Slider />
        <video
          src={Background}
          loop
          autoPlay
          muted
          className={`${classes.Bg}`}
        />
      </div>
    </>
  );
}
