// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// My Styles
import "./WeaponSlider.css";
import classes from "./WeaponSlider.module.css";
import { useWeaponCtx } from "../../store/weapon-context";
import { useEffect, useState } from "react";
import WeaponModal from "../WeaponModal/WeaponModal";

export default function Slider(props) {
  useEffect(() => {
    const swiperPagination = document.querySelector(".swiper-pagination");
    swiperPagination.className += ` ${classes.WeaponBar}`;
    const swiperPaginationBullet = document.querySelector(".swiper-pagination");
    swiperPaginationBullet.className += ` ${classes.WeaponBox}`;
  }, []);
  const { weapons } = useWeaponCtx();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const indexImage = (index, className) => {
    if (weapons.length === 0) return null;
    return `<span class=${className}><img src="${weapons[index].killStreamIcon}" loading="lazy" alt=${weapons[index].displayName}></span>`;
  };

  const pagination = {
    clickable: true,
    bulletElement: "img",
    renderBullet: indexImage,
  };
  const navigation = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      {
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
          {weapons.map((weapon) => {
            return (
              <SwiperSlide
                key={weapon.displayName}
                className={classes.WeaponSlide}
              >
                <h1 className={`display-1 ${classes.title}`}>
                  {weapon.displayName}
                </h1>
                <img
                  src={weapon.displayIcon}
                  alt={weapon.displayName}
                  className={classes.image}
                  onClick={handleShow}
                  loading="lazy"
                />
                {/* <h6 className={`${classes.modalButton}`}>
                {`For showing details of ${weapon.displayName} click the ${weapon.displayName} image!`}
              </h6> */}
                <WeaponModal handleClose={handleClose} show={show} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </>
  );
}
