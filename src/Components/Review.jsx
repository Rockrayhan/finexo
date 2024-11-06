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
    slidesToScroll: 1
  };

    return (
        <div className='container my-20'>

            <div>
                <h1 className='text-center my-10'> What says our <span className='text-primary'> Customers </span> </h1>

                <div>


                <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
<div className="relative client-container">
<div key={1}>
          <img src="images/client1.jpg" className="rounded-full absolute client-img" alt="" />

          <div className=" review-card py-8 px-4">
            <h3 className="text-xl font-bold"> LusDen </h3>
            <p className="my-3 text-sm">magna aliqua, Ut </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora pariatur autem quibusdam fugit expedita. Consectetur blanditiis assumenda quidem non ipsum et architecto neque nam aliquid
            </p>
          </div>
        </div>
</div>
<div className="relative client-container">
<div key={1}>
          <img src="images/client2.jpg" className="rounded-full absolute client-img" alt="" />

          <div className=" review-card py-8 px-4">
            <h3 className="text-xl font-bold"> Zen Court </h3>
            <p className="my-3 text-sm">magna aliqua, Ut </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora pariatur autem quibusdam fugit expedita. Consectetur blanditiis assumenda quidem non ipsum et architecto neque nam aliquid
            </p>
          </div>
        </div>
</div>
       
      </Slider>
      <div className="mt-10" style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Review;
