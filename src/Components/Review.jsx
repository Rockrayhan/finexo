import React, { useRef } from "react";
import Slider from "react-slick";

const Review = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="container my-20 overflow-x-hidden py-10">
      <div>
        <h1 className="text-center my-10">
          {" "}
          What says our <span className="text-primary"> Customers </span>{" "}
        </h1>

        <div>
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className=" "
            >


<div className="relative client-container">
                <div key={1}>
                  <img
                    src="images/client1.jpg"
                    className="rounded-full absolute client-img"
                    alt=""
                  />

                  <div className=" review-card py-8 px-4">
                    <h3 className="text-xl font-bold"> LusDen </h3>
                    <p className="my-3 text-sm">magna aliqua, Ut </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempora pariatur autem quibusdam fugit expedita.
                      Consectetur blanditiis assumenda quidem non ipsum et
                      architecto neque nam aliquid
                    </p>
                  </div>
                </div>
              </div>



              <div className="relative client-container ">
                <div key={1}>
                  <img
                    src="images/client2.jpg"
                    className="rounded-full absolute client-img"
                    alt=""
                  />

                  <div className=" review-card py-8 px-4">
                    <h3 className="text-xl font-bold"> Zen Court </h3>
                    <p className="my-3 text-sm">magna aliqua, Ut </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Tempora pariatur autem quibusdam fugit expedita.
                      Consectetur blanditiis assumenda quidem non ipsum et
                      architecto neque nam aliquid
                    </p>
                  </div>
                </div>
              </div>

              
            </Slider>
            <div className="mt-10" style={{ textAlign: "center" }}>
              <button className="btn review-slider-btn" onClick={previous}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button className="btn review-slider-btn" onClick={next}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
