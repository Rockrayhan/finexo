import React from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";

const Team = () => {
  return (
    <div className="team-section p-10">
      <h1 className="text-white text-center">
        {" "}
        Our <span className="text-primary"> Team </span>{" "}
      </h1>

      <div className="grid grid-cols-4 gap-8 py-10">

        <div className="team-card">
          <div className="card w-96 shadow-xl">
            <figure className="">
              <img
                src="images/team-1.jpg"
                className="border-4 rounded-full w-28"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary"> Joseph Brown </h2>
              <p> Marketing Head </p>
              <div className="card-actions mt-6 flex space-x-4">

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="" size={22} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="" size={22} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="" size={22} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="" size={22} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="" size={22} />
      </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="card w-96 shadow-xl">
            <figure className="">
              <img
                src="images/team-2.jpg"
                className="border-4 rounded-full w-28"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary"> Nancy White </h2>
              <p> Marketing Head </p>
              <div className="card-actions mt-6 flex space-x-4">

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="" size={22} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="" size={22} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="" size={22} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="" size={22} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="" size={22} />
      </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="card w-96 shadow-xl">
            <figure className="">
              <img
                src="images/team-3.jpg"
                className="border-4 rounded-full w-28"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary"> Earl Martinez</h2>
              <p> Marketing Head </p>
              <div className="card-actions mt-6 flex space-x-4">

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="" size={22} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="" size={22} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="" size={22} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="" size={22} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="" size={22} />
      </a>
              </div>
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="card w-96 shadow-xl">
            <figure className="">
              <img
                src="images/team-4.jpg"
                className="border-4 rounded-full w-28"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary"> Josephine Allard
              </h2>
              <p> Marketing Head </p>
              <div className="card-actions mt-6 flex space-x-4">

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="" size={22} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="" size={22} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="" size={22} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="" size={22} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="" size={22} />
      </a>
              </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
};

export default Team;
