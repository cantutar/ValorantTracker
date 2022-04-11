import Background from "../../assets/videos/weapon.webm";
import Slider from "../AgentSlider/AgentSlider";
import classes from "./WeaponsVideoBack.module.css";

export default function WeaponsVideoBack(props) {
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
