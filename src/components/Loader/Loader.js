import { Spinner } from "react-bootstrap";
import classes from "./Loader.module.css";

export default function Loader(props) {
  return (
    <div className={classes.Loader}>
      <Spinner animation="grow" variant="dark">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
