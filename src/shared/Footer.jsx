import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer py-20">
      <div className="container grid-cols-4">
        <div className="col-span-1">
<div className="flex flex-col footer-1">
    

<h1> Address </h1>

<div className="flex flex-col gap-2">
    
<div className="flex gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span> Location </span>
          </div>
          <div className="flex gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span> Call </span>
          </div>
          <div className="flex gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <span> Demo@gmail.com </span>
          </div>

</div>


<div className="flex gap-4">

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
</div>

</div>
        </div>


        <div className="col-span-1"> 
            <h1 className="mb-10"> Info </h1>

            <p>
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>

             </div>
        <div className="col-span-1 flex flex-col gap-6 ms-10"> 
            
            <h1> links </h1>

                <a href=""> Home </a>
                <a href=""> About </a>
                <a href=""> Service </a>
                <a href=""> Why Us</a>
                <a href=""> Team</a>

             </div>
        <div className="col-span-1"> 
            <h1>  Subscribe </h1>

            <input type="text" placeholder="Enter Email" className="bg-inherit font-bold mt-10" />
            <hr />

            <button className="btn btn-primary px-20 mt-10"> Subscribe </button>

            

            
             </div>
      </div>
    </div>
  );
};

export default Footer;
