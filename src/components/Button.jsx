import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FaTwitterSquare } from "react-icons/fa"
import { MdOutgoingMail } from "react-icons/md";

const Button = () => {
  return (
    <div className="flex items-start pl-4 md:items-center flex-col md:flex-row gap-6">
      <div className="flex items-center md:items-center gap-4 text-lg">
        <a className="text-sm py-4 flex gap-2 items-center transition-all hover:text-blue-500" href="https://www.privateemail.com">
          <MdOutgoingMail />
          <span>STAFF EMAIL</span>
        </a>
      </div>
      {/* <button className="bg-primary text-white  px-6 py-2 rounded-md ">
        +234-808-668-8557
      </button> */}
    </div>
  );
};

export default Button;
