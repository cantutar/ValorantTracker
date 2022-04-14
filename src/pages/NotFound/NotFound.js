import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../assets/images/raze-reyna.png";
import image2 from "../../assets/images/raze/raze-gun.png";
import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./NotFound.module.css";

export default function NotFound(props) {
  return (
    <>
      <div className={classes.h100}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 text-white d-flex align-self-center order-last order-lg-first">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-1">404 Page Not found.</h1>
                </div>
                <div className="col d-flex align-items-end">
                  <Button variant="danger" className="mx-auto" as={Link} to="/">
                    Go back to Home Agent?
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-3 order-first order-lg-last">
              <img src={image} alt="" className={classes.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
