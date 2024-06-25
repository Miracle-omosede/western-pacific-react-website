import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FaTwitter } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io";

const Button = () => {
  return (
    <div className="flex items-start pl-4 md:items-center flex-col md:flex-row gap-6">
      <div className="flex items-center md:items-center gap-4 text-3xl">
        <button className="text-[15px]">
          <AiFillFacebook />
        </button>

        <button className=" text-[15px]">
          <AiFillInstagram />
        </button>

        <button className=" text-[15px]">
          <FaTwitter />
        </button>
      </div>
      {/* <button className="bg-primary text-white  px-6 py-2 rounded-md ">
        +234-808-668-8557
      </button> */}
    </div>
  );
};

export default Button;
