import List from "./list/List";

function Homepage() {
  return (
    <body>
      {/*  */}

      {/* <!-- hero section --> */}
      <div
        id="carouselExampleIndicators"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {/* <!--Carousel indicators--> */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleIndicators"
            data-te-slide-to="3"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 4"
          ></button>
        </div>

        {/* <!--Carousel items--> */}
        <div className="relative h-[450px] w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="./src/assets/1.jpg"
              className="block w-full"
              alt="COD WarFare"
            />
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="./src/assets/2.jpg"
              className="block w-full"
              alt="Game 2"
            />
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="./src/assets/3.jpg"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[400ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src="./src/assets/4.jpg"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        {/* <!--Carousel controls - prev item--> */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
      <div className="py-8 px-16 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <img
          src="./src/assets/first hero.jpg"
          alt="All game"
          className="relative h-[450px] w-full object-none"
        />
      </div>

      {/* <!-- product list --> */}
      <section className="my-10 rounded-lg">
        <List />
      </section>

      {/* <!-- FOOTER START --> */}
      <section id="footer" className="bg-[#070221] text-white pt-14 pb-6">
        <div className="bagian1 flex justify-center pb-6 mx-32 max-[768px]:flex-col max-[768px]:text-center max-[768px]:mx-16">
          {/* <!-- bagian about --> */}
          <div id="b1a" className="ml-auto mr-0 max-[768px]:pb-6">
            <h1 className="font-bold text-xl pb-2 max-[1024px]:text-lg max-[768px]:text-base">
              About Gameshop
            </h1>
            <p className="text-neutral-400 max-[1024px]:text-sm max-[768px]:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Omnis minima ipsum dicta cum repellendus molestiae commodi
              sapiente animi, fugit cumque rerum magnam vitae. Commodi, eveniet.
              Reiciendis reprehenderit voluptate odio assumenda.
            </p>
          </div>

          {/* <!-- link list informasi client --> */}
          <div
            id="b1b"
            className="mx-0 px-20 max-[768px]:px-0 max-[768px]:pb-6"
          >
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
              <h1 className="font-bold text-xl pb-2 max-[1024px]:text-lg max-[768px]:text-base">
                Visit us
              </h1>
            </div>
            <div>
              <h2 className="font-bold text-neutral-300 max-[1024px]:text-base max-[768px]:text-sm">
                Gameshop main office
              </h2>
              <p className="text-neutral-400 max-[1024px]:text-sm max-[768px]:text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                possimus nisi saepe magni cupiditate eius esse, perspiciatis
                numquam rem.
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

      {/* <!-- FOOTER END --> */}
      <script src="../node_modules/tw-elements/dist/js/index.min.js"></script>
    </body>
  );
}

export default Homepage;
