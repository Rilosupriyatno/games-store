import React from "react";
import { Link } from "react-router-dom";

function Foot() {
	return (
		<footer class="w-screen m-0 p-0 z-50 bg-gradient-to-br from-black to-blue-950">
			<div className="text-xm flex justify-between px-32">
				<div className="text-justify">
					<span className="text-xl font-bold">gameshop</span> pusat download game terlengkap, aman, dan GRATIS.{" "}
					<br></br>
					website yang memiliki ribuan game yang siap di download dan di mainkan.
				</div>
				<div>
					<ul className="flex items-center justify-center h-16 text-xs gap-20">
						<li className="hover:opacity-50 hover:duration-300 hover:underline underline-offset-8">
							<Link to="/"> Home </Link>
						</li>
						<li className="hover:opacity-50 hover:duration-300 hover:underline underline-offset-8">
							<Link to="/portfolio">how to download </Link>
						</li>
						<li className="hover:opacity-50 hover:duration-300 hover:underline underline-offset-8">
							<Link to="/contact"> Contact </Link>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex justify-center bg-gradient-to-t from-[#5f5e5eae] to-[#000000a0]">
				<h1 class="text-xs">© Copyright 2023, Kelompok 5. All Rights Reserved. </h1>
			</div>
		</footer>
	);
}

export default Foot;
