import classes from "./Wrapper.module.css";

export default function Wrapper(props) {
  return <div className={classes.wrapper}>{props.children}</div>;
}
