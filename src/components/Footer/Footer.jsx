import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer p-10 md:p-28 md:text-lg bg-base-200 text-base-content font-semibold font-bricolage text-sm">
      <div className="flex flex-col -mt-10">
        <img className="w-32 m-0 p-0 mt-10" src={logo} alt="logo-image" />
        <p>
          <span className="uppercase text-[#059CE2] text-xl font-bold ">
            <span className="text-[#FE8D09]">Western</span> Pacific Solutions
          </span>
          <br />
          <p className="md:pr-0">
            <span>
              <h1 className="uppercase font-light">Port harcourt office</h1> 14,
              Orogbum Cresent old GRA, Port Harcourt.
            </span>
          </p>
          <p className="md:pr-0">
            <span>
              <h1 className="uppercase font-light">Lagos office</h1> 13, olalade
              kazeem Gernade Estate, Idimu, Lagos.
            </span>
          </p>
        </p>
      </div>
      <div className="uppercase">
        <span className="footer-title text-[#059CE2]">Explore</span>
        <a href="/About" className="link link-hover">
        <Link
                  to="who"
                  smooth={true}
                  duration={500}
                >
                  who are we
                </Link>
        </a>
        <a href="/Services" className="link link-hover">
        <Link
                  to="who"
                  smooth={true}
                  duration={500}
                >
                  Services
                </Link>
        </a>
        <a className="link link-hover">
        <Link
                  to="nocorners"
                  smooth={true}
                  duration={500}
                >
                  faq<span className="lowercase">s</span>
                </Link>
        </a>
      </div>
      <div className="uppercase">
        <span className="footer-title text-[#059CE2]">Company</span>
        <a href="/Projects" className="link link-hover">
        <Link
                  to="partners"
                  smooth={true}
                  duration={500}
                >
                  clients
                </Link>
        </a>
        <a href="/Contact" className="link link-hover">
        <Link
                  to="nocorners"
                  smooth={true}
                  duration={500}
                >
                  contact
                </Link>
        </a>
        <a className="link link-hover">Customer support</a>
      </div>
      <div className="uppercase">
        <span className="footer-title uppercase text-[#2cbcff]">reach out</span>
        <a className="link link-hover">PH: 234-815-236-3717</a>
        <a className="link link-hover">PH: 234-8086-688-557</a>
        <a className="link link-hover">PH: 234-7011-263-564</a>
        <a className="link link-hover">PH: 234-816-871-4744</a>
        <a href="mailto:info@westernpacificsolutionslimited.com" className="link lowercase text-blue-500 link-hover">
        info@westernpacificsolutionslimited.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
