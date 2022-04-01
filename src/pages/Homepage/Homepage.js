import { useState } from "react";
import classes from "./Homepage.module.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import Input from "../../components/Input/Input";
import ValoLogo from "../../components/ValoLogo/ValoLogo";

export default function Homepage(props) {
  const [summonnerName, setSummonnerName] = useState("");
  function onChangeHandler(e) {
    setSummonnerName(e.target.value.trim());
  }
  return (
    <>
      <div className={classes.hero}>
        <Input
          id={"SummonerName"}
          placeholder={"Summoner Name"}
          class={classes.heroInput}
          Content={"Summoner Name"}
          value={summonnerName}
          onChange={onChangeHandler}
        />
        <ValoLogo className={`${classes.heroText}`} />
        <HeroImage className={classes.heroImage} />
      </div>
    </>
  );
}
