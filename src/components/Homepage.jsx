import { Carousel } from "flowbite-react";
import List from "./list/List";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

function Homepage() {
	return (
		<>
			{/* <!-- hero section --> */}
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-5">
				<Carousel>
					<img src={image1} alt="games-image" />
					<img src={image2} alt="games-image" />
					<img src={image3} alt="games-image" />
					<img src={image4} alt="games-image" />
				</Carousel>
			</div>

			{/* <!-- product list --> */}
			{/* <section className="my-10"> */}
			<List />

			{/* <!-- FOOTER START --> */}
			<section id="footer" className="bg-[#070221] text-white pt-14 pb-6">
				<div className="bagian1 flex justify-center pb-6 mx-32 max-[768px]:flex-col max-[768px]:text-center max-[768px]:mx-16">
					{/* <!-- bagian about --> */}
					<div id="b1a" className="ml-auto mr-0 max-[768px]:pb-6">
						<h1 className="font-bold text-xl pb-2 max-[1024px]:text-lg max-[768px]:text-base">About Gameshop</h1>
						<p className="text-neutral-400 max-[1024px]:text-sm max-[768px]:text-xs">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							<br />
							Omnis minima ipsum dicta cum repellendus molestiae commodi sapiente animi, fugit cumque rerum magnam
							vitae. Commodi, eveniet. Reiciendis reprehenderit voluptate odio assumenda.
						</p>
					</div>

					{/* <!-- link list informasi client --> */}
					<div id="b1b" className="mx-0 px-20 max-[768px]:px-0 max-[768px]:pb-6">
						<div>
							<h1 className="block font-bold text-xl pb-2 pr-10 max-[1024px]:pr-0 max-[1024px]:text-lg max-[768px]:text-base max-[768px]:pb-1">
								Resources
							</h1>
						</div>
						<div className="flex justify-between max-[1024px]:flex-col">
							<div className="pr-5 mr-5 w-40 max-[1024px]:pr-0 max-[1024px]:mr-0 max-[768px]:w-auto">
								<ul className="text-sm leading-loose font-semibold text-neutral-300 max-[1024px]:text-xs">
									<li className="border-b-2 border-neutral-500 py-2 hover:text-white">
										<a href="#">ABOUT</a>
									</li>
									<li className="border-b-2 border-neutral-500 py-2 hover:text-white">
										<a href="#">FAQ</a>
									</li>
									<li className="border-b-2 border-neutral-500 py-2 hover:text-white">
										<a href="#">HOW TO BUY</a>
									</li>
									<li className="py-1 hover:text-white max-[1024px]:border-b-2 max-[1024px]:border-neutral-500">
										<a href="#">TIPS & TUTORIALS</a>
									</li>
								</ul>
							</div>
							<div className="w-40 max-[768px]:w-auto">
								<ul className="text-sm leading-loose font-semibold text-neutral-300 max-[1024px]:text-xs">
									<li className="border-b-2 py-2 border-neutral-500 hover:text-white">
										<a href="#">COMMUNITY</a>
									</li>
									<li className="border-b-2 py-2 border-neutral-500 hover:text-white">
										<a href="#">TESTIMONIALS</a>
									</li>
									<li className="border-b-2 py-2 border-neutral-500 hover:text-white">
										<a href="#">TERMS & CONDITIONS</a>
									</li>
									<li className="py-1 hover:text-white">
										<a href="#">OUR PARTNER</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- bagian alamat --> */}
					<div id="b1c" className="ml-0 mr-auto">
						<div>
							<h1 className="font-bold text-xl pb-2 max-[1024px]:text-lg max-[768px]:text-base">Visit us</h1>
						</div>
						<div>
							<h2 className="font-bold text-neutral-300 max-[1024px]:text-base max-[768px]:text-sm">
								Gameshop main office
							</h2>
							<p className="text-neutral-400 max-[1024px]:text-sm max-[768px]:text-xs">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque possimus nisi saepe magni cupiditate
								eius esse, perspiciatis numquam rem.
							</p>
						</div>
					</div>
				</div>

				{/* <!-- contact --> */}
				<div className="bagian2 pt-14 max-[768px]:pt-0">
					<div id="b2a" className="bagian2 flex w-full justify-center">
						<div>
							<h1 className="font-bold text-xl pb-2 max-[1024px]:text-lg max-[768px]:text-base">
								How to connect with us
							</h1>
						</div>
					</div>

					<div id="b2b" className="py-10">
						<div className="flex justify-center max-[768px]:flex-col">
							<div className="flex justify-center mr-12 max-[768px]:mx-auto">
								<a className="w-8 h-8 mr-32" href="#">
									<img src="./src/assets/instagram.png" alt="instagram" />
								</a>
								<a className="w-8 h-8" href="#">
									<img src="./src/assets/twitter.png" alt="twitter" />
								</a>
							</div>

							<div className="flex justify-center ml-32 max-[768px]:mx-auto max-[768px]:mt-14">
								<a className="w-8 h-8 mr-32" href="#">
									<img src="./src/assets/whatsapp.png" alt="whatsapp" />
								</a>
								<a className="w-8 h-8" href="#">
									<img src="./src/assets/discord.png" alt="whatsapp" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- copyright --> */}
			<footer className="bg-[#040115] m-0 w-full h-24 pt-8">
				<div className="flex justify-center">
					<div className="copyright text-neutral-500 font-bold max-[1024px]:text-sm max-[768px]:text-xs">
						<p>2023 - Made by Kelompok 5</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Homepage;
