// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// mine
import "./style.css";
import classes from "./Slider.module.css";

export default function Slider(props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={pagination}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      className={`${classes.Slider}`}
    >
      <SwiperSlide>
        <div className="cont">
          <h1 className="display-1 title">BRIMSTONE</h1>
          <img
            src="https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportraitv2.png"
            alt=""
          />
          <div
            className="card bg-primary border-0"
            style={{ maxWidth: "18rem" }}
          >
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
