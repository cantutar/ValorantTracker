import HeroImage from "../components/HeroImage/HeroImage";
import Input from "../components/Input/Input";
import ValoLogo from "../components/ValoLogo/ValoLogo";
import classes from "./Homepage.module.css";

export default function Homepage(props) {
  return (
    <>
      <div className={classes.hero}>
        <Input
          id={"SummonerName"}
          placeholder={"Summoner Name"}
          class={classes.heroInput}
          Content={"Summoner Name"}
        />
        <ValoLogo className={`wrapper ${classes.heroText}`} />
        <HeroImage className={classes.heroImage} />
      </div>
    </>
  );
}
