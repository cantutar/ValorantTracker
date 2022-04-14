import classes from "./Card.module.css";

export default function CardWithGlassFx(props) {
  return (
    <>
      <div className={`${classes.card}`}>{props.children}</div>
    </>
  );
}
