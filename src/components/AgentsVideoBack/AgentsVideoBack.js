import Background from "../../assets/videos/char.webm";
// import Slider from "../AgentSlider/AgentSlider";
import classes from "./AgentsVideoBack.module.css";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";

const Slider = lazy(() => import("../AgentSlider/AgentSlider"));
export default function AgentsVideoBack(props) {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Slider />
        </Suspense>
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
