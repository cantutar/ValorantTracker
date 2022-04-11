// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// mine
import "./AgentSlider.css";
import classes from "./AgentSlider.module.css";
import { useAgentsInfo } from "../../store/agent-context";

export default function Slider(props) {
  const { agents } = useAgentsInfo();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const navigation = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <Swiper
      cssMode
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation={navigation}
      pagination={pagination}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      className={`${classes.Slider}`}
    >
      {agents.map((agent) => {
        return (
          agent.isPlayableCharacter && (
            <SwiperSlide key={agent.displayName}>
              <div className="cont">
                <h1 className="display-1 title">{agent.displayName}</h1>
                <img src={agent.fullPortraitV2} alt="" className="image" />
                {/* <div
                  className="card bg-transparent border-0"
                  // style={{ maxWidth: "18rem" }}
                >
                  <h5 className="card-header d-flex justify-content-evenly align-items-center">
                    {agent.role.displayName}{" "}
                    <img
                      src={agent.role.displayIcon}
                      alt={agent.role.displayName}
                      style={{ width: "1em" }}
                    />
                  </h5>
                  <div className="card-body">
                    <p className="card-text">{agent.description}</p>
                  </div>
                </div> */}
                {/* TODO ADD A MODAL ON OPENABLE WITH CHAR */}
              </div>
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  );
}
