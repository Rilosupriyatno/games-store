import React from "react";
import "./list.css";
import axios from "axios";
import { useEffect, useState } from "react";
import options from "../../api/api";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const List = () => {
	const [items, setItems] = useState([]);

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
			<h2 className="text-5xl">List Games</h2>

			<Swiper
				// install Swiper modules
				className="container games_container"
				modules={[Navigation, Pagination]}
				spaceBetween={50}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
				}}
				navigation={{ clickable: true }}>
				{items.map(({ id, thumbnail, title }) => {
					return (
						<SwiperSlide key={id} className="games">
							<article className="games_item">
								<div className="games_item-image">
									<img src={thumbnail} alt={title} />
								</div>
								<h3>{title}</h3>
								<Link to={`/detail/${id}`}>
									<span className="btn">Detail</span>
								</Link>
							</article>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};
export default List;
