import React, { useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import TopNav from "./TopNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [togglerNav, setTogglerNav] = useState(false);
  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <div className="">
      <TopNav/>
      <nav className="bg-white max-w-[1800px] mx-auto w-full md:px-0 px-4 overflow-hidden">
        <div className="flex items-center font-medium justify-around">
          <div
            className="z-50 py-5 md:w-auto w-full flex justify-between items-center"
            id="forward"
          >
            <img src={Logo} alt="logo" className="cursor-pointer h-12" />
            <div
              className="text-3xl md:hidden items-center cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-4 font-opensans font-bold">
            <li>
              <Link
                to="/"
                smooth={true}
                duration={500}
                className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
              >
                Who are we?
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link
                to="/clients"
                smooth={true}
                duration={500}
                onClick={clickHandler}
                className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                smooth={true}
                duration={500}
                onClick={clickHandler}
                className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
              >
                Contact us
              </Link>
            </li>

            <li>
              <Button />
            </li>
          </ul>
          {/* Mobile nav */}
          <ul
            id="mobile-nav"
            className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto  bottom-0 py-24 pl-4
        duration-500 font-bold z-50 ${open ? "left-0" : "left-[-100%]"}
        `} style={{zIndex: 999999}}
          >
            <li>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-7 uppercase hover:text-blue-600 px-3 inline-block "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="py-7 uppercase hover:text-blue-600 px-3 inline-block"
              >
                Who are we?
              </Link>
            </li>
            <li className="px-3 py-2 text-gray-400 uppercase">
              Services
              <ul className="border-l-2">
                <li>
                  <Link
                    to="/generalservice"
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                  >
                    General Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marine"
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                  >
                    Marine Services
                  </Link>
                </li>
                {/* <li>
                <Link
                  to="mas"
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                >
                  Marine advisory services
                </Link>
              </li>
              <li>
                <Link
                  to="dss"
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                >
                  Diving services
                </Link>
              </li>
              <li>
                <Link
                  to="wms"
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                >
                  Waste management services
                </Link>
              </li>
              <li>
                <Link
                  to="rvm"
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                >
                  Rig and vessel maintenance
                </Link>
              </li> */}
                {/* <li>
                <Link
                  to="ds"
                  smooth={true}
                  duration={500}
                  onClick={() => setOpen(false)}
                  className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                >
                  Dredging services
                </Link>
              </li> */}
                <li>
                  <Link
                    to="/construction"
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                  >
                    Construction and Remodelling Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aviation"
                    smooth={true}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className="py-3 uppercase text-sm text-black px-3 hover:text-blue-600 inline-block"
                  >
                    Aviation Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/clients"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="py-7 uppercase px-3 hover:text-blue-600 inline-block"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
                className="py-7 uppercase  hover:text-blue-600 px-3 inline-block"
              >
                Contact us
              </Link>
            </li>
            <div className="py-5">
            <Button />
          </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
