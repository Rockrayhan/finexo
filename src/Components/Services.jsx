import React from "react";

const Services = () => {
  return (
    <div className="container my-20">

    
      <div className="text-center my-6">
        <h1>
          {" "}
          Our <span className="text-primary"> Services </span>{" "}
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 center flex-col gap-4 bg-gray-100 px-2 py-4 text-center rounded-md">
          <img src="images/s1.png" alt="" className="h-20 w-20" />
          <h2> CURRENCY WALLET </h2>
          <p>
            {" "}
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using{" "}
          </p>

          <a href="" className="font-bold hover:text-primary">
            {" "}
            Read More{" "}
          </a>
        </div>

        <div className="col-span-1 center flex-col gap-4 bg-gray-100 px-2 py-4 text-center rounded-md">
          <img src="images/s2.png" alt="" className="h-20 w-20" />
          <h2> SECURITY STORAGE </h2>
          <p>
            {" "}
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using{" "}
          </p>

          <a href="" className="font-bold hover:text-primary">
            {" "}
            Read More{" "}
          </a>
        </div>

        <div className="col-span-1 center flex-col gap-4 bg-gray-100 px-2 py-4 text-center rounded-md">
          <img src="images/s3.png" alt="" className="h-20 w-20" />
          <h2> EXPERT SUPPORT </h2>
          <p>
            {" "}
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using{" "}
          </p>

          <a href="" className="font-bold hover:text-primary">
            {" "}
            Read More{" "}
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn btn-primary px-14 hover:bg-sky-700">
          {" "}
          View All{" "}
        </button>
      </div>
    </div>
  );
};

export default Services;
