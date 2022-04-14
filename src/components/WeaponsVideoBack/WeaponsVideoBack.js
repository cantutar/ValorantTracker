import Background from "../../assets/videos/weapon.webm";
import classes from "./WeaponsVideoBack.module.css";
import WeaponSlider from "../WeaponSlider/WeaponSlider";

export default function WeaponsVideoBack(props) {
  return (
    <>
      <div>
        <WeaponSlider />
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
