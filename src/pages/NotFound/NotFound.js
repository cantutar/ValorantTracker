import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

export default function NotFound(props) {
  return (
    <>
      <div className={`${classes.h100} bg-valorantprimary text-white`}>
        <div className="row">
          <div className={`col-6 mx-auto text-valorantred ${classes.error}`}>
            <h1>ERROR</h1>
          </div>
          <div className="col-12">
            <h1 className={`display-1 ${classes.banner}`}>
              404 Page Not found.
            </h1>
          </div>
          <div className="col-12">
            <Button variant="valorantblue" as={Link} to="/">
              Go back to Home Agent?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
