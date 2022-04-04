import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../assets/images/raze-reyna.png";
import image2 from "../../assets/images/raze/raze-gun.png";
import Wrapper from "../../components/Wrapper/Wrapper";
import classes from "./NotFound.module.css";

export default function NotFound(props) {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-white d-flex align-self-center">
              <h1 className="display-4">404 Page Not found. :(</h1>
            </div>
            <div className="col-md-3 d-flex align-self-center">
              <Button variant="danger" className="mx-auto" as={Link} to="/">
                Go back to Home Agent?
              </Button>
            </div>
            <div className="col-md-6">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
