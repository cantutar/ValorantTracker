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
import { useEffect } from "react";

export default function Slider(props) {
  const { agents } = useAgentsInfo();
  useEffect(() => {
    const swiperPagination = document.querySelector(".swiper-pagination");
    swiperPagination.className += ` ${classes.AgentBar}`;
  }, []);
  function AgentsPagination(index, className) {
    if (agents.length === 0) return null;
    return agents[index].isPlayableCharacter
      ? `<span class=${className}><img src="${agents[index].displayIconSmall}" alt=${agents[index].displayName}></span>`
      : "";
  }

  const pagination = {
    clickable: true,
    renderBullet: AgentsPagination,
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
            <SwiperSlide key={agent.displayName} className={classes.AgentSlide}>
              <h1 className={`${classes.title}`}>{agent.displayName}</h1>
              <img
                src={agent.bustPortrait}
                alt={agent.displayName}
                className={`d-none d-md-block d-lg-block d-xxl-block ${classes.image}`}
              />
              <img
                src={agent.fullPortrait}
                alt={agent.displayName}
                className={`d-sm-none ${classes.image}`}
              />
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
            </SwiperSlide>
          )
        );
      })}
    </Swiper>
  );
}
