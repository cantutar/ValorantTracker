import Hero from "../../assets/images/FFA_Deathmatch_Poster.png";

export default function HeroImage(props) {
  return (
    <div>
      <img className={props.className} src={Hero} alt="HeroImage" />
    </div>
  );
}
