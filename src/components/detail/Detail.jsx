import React from "react";
import "./detail.css";
import { useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();

	return (
		<footer>
			<div className="">
				<small>&copy; Webio. All right reserved.</small>
			</div>
		</footer>
	);
};

export default Detail;
