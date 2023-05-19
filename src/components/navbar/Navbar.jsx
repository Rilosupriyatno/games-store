import React from "react";
import fb from "../../assets/imgnavbar/facebook.png";
import ig from "../../assets/imgnavbar/instagram.png";
import krj from "../../assets/imgnavbar/keranjang.png";
import pfl from "../../assets/imgnavbar/profil.png";
import yt from "../../assets/imgnavbar/youtube.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header className="sticky top-0 w-full z-50">
			{/* <!-- navbar1 --> */}
			<nav
				className="hidden lg:flex h-6  w-full bg-[#141487]
            justify-between text-gray-300 text-xs place-items-center py-8 lg:text-xl">
				<h1 className="mx-2 lg:mx-24 text-xs lg:text-lg uppercase font-bold text-white">
					play for free <span className="capitalize">@ gameshop</span>
				</h1>
				<ul className="flex flex-row justify-between place-items-center lg:mx-24">
					<li className="px-1 lg:px-7 hover:text-white duration-300">
						<Link to="/abt">about</Link>
					</li>
					<li className="px-1 lg:px-7 hover:text-white duration-300">
						<a href="">how to buy</a>
					</li>
					<li className="px-1 lg:px-7 hover:text-white duration-300">
						<a href="">contact</a>
					</li>
					<li className="flex flex-row gap-3 place-items-center">
						<a href="">
							<img className="w-5 lg:w-8 opacity-60 hover:opacity-100 duration-300" src={fb} alt="facebook"></img>
						</a>
						<a href="">
							<img className="w-5 lg:w-8 opacity-60 hover:opacity-100 duration-300" src={ig} alt="instagram"></img>
						</a>
						<a className="" href="">
							<img className="w-5 lg:w-8 opacity-60 hover:opacity-100 duration-300" src={yt} alt="youtube"></img>
						</a>
					</li>
				</ul>
			</nav>

			{/* <!-- navbar2 --> */}
			<nav
				className="flex text-xl font-bold text-gray-400  bg-gradient-to-r from-[#001f52] 
            via-[#001f52] to-[#000000] uppercase flex-row justify-between place-items-center py-5">
				{/* <!-- brand --> */}
				<a className="mx-2 lg:mx-24 text-white" href="">
					<h1>gameshop</h1>
				</a>
				{/*  item menu search dll */}
				<div className="flex flex-row place-items-center justify-center">
					{/* <!-- container search --> */}
					<div className="flex flex-col gap-4 justify-center place-items-center">
						<div className="hidden sm:flex justify-around place-items-center w-full">
							<input className="h-10 w-full" type="search" placeholder="search" name="cari" id="" />

							<button className="bg-gray-700 w-10 h-10" type="submit">
								<svg
									className="place-items-center m-2 w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						{/* <!-- cont.menu --> */}
						<ul className="hidden lg:flex flex-row gap-7">
							<li className="underline-offset-8 hover:text-white hover:underline duration-300">
								<a href="">shop all</a>
							</li>
							<li className="underline-offset-8 hover:text-white hover:underline duration-300">
								<a href="">new release</a>
							</li>
							<li className="underline-offset-8 hover:text-white hover:underline duration-300">
								<a href="">coming soon</a>
							</li>
						</ul>
					</div>
					{/* <!-- parent buttonmenu, keranjang & profile --> */}
					<ul className="mx-4 lg:mx-24 flex flex-row-reverse items-center gap-5 justify-between">
						{/* <!-- logo menu responsive --> */}
						<li className="lg:hidden opacity-60 hover:opacity-100 duration-300 place-content-center mt-1">
							<button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-10 h-10 items-center">
									<path
										fill-rule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</li>
						<li className="flex flex-row gap-6 place-items-center">
							{/* <!-- logo keranjang --> */}
							<a className=" opacity-60 hover:opacity-100 duration-300 lg:w-14 w-12" href="">
								<img src={krj} alt=""></img>
							</a>
							{/* <!-- logo profile --> */}
							<a className="hidden lg:flex opacity-60 hover:opacity-100 duration-300 lg:w-10 w-7" href="">
								<img src={pfl} alt=""></img>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
export default Navbar;
