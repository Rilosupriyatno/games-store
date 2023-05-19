import React from "react";
import "./list.css";
import axios from "axios";
import { useEffect, useState } from "react";
import options from "../../api/api";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const List = () => {
  const [items, setItems] = useState([]);
  const [activeNav, setActiveNav] = useState("/");
  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const response = await axios.request(options);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [options]);
  return (
    <section id="list-games">
      <h2>List Games</h2>

      <Swiper
        className="container games_container"
        // install Swiper

        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {items.map(({ id, thumbnail, title }) => {
          return (
            <SwiperSlide className="games" key={id}>
              <article className="games_item">
                <div className="games_item-image">
                  <img src={thumbnail} alt={title} />
                </div>
                <h3>{title}</h3>
                <Link
                  to={`/detail/${id}`}
                  className={activeNav === "/" ? "active" : ""}
                >
                  <span className="btn">Detail</span>
                </Link>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> */}
    </section>
  );
};
export default List;
