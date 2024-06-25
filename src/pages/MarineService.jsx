import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import shipImage from "../assets/cargo-container.jpg";
import { FaFilePdf } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import aeralShip from "../assets/arieal-view.jpg";
import MarineAdvisory from "../components/MarineServices/MarineAdvisory";
import Diving from "../components/MarineServices/Diving";
import dredging from "../assets/dredging-tracktor.jpg";
import Waste from "../assets/dirt.jpg";
import vessel from "../assets/DREDGING-COMPANY-PHOTO-1030x601.png"
import * as Scroll from "react-scroll";
import heroImage from '../assets/aerial-view.jpg';
import BackToUp from "@uiw/react-back-to-top";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import diving from "../assets/diving.png";

const MarineService = () => {
  return (
    <div className="font-bricolage">
      {/* image container */}
      <div className="w-full h-[200px] md:h-[500px] relative">
        {/* img overlay */}
        <div className="bg-[#0e1f4e] absolute top-0 h-full w-full z-10 opacity-70"></div>
        {/* <img
          src={aeralShip}
          alt="construction-image"
          className="absolute top-0 object-cover w-full h-[inherit]"
        /> */}

<img
          src={heroImage}
          alt="hero-bg"
          className=" absolute top-0 object-cover w-full h-[inherit]"
        /> 
        <div className="relative flex flex-col items-center justify-center w-full h-full z-40">
          <h1 className="uppercase text-white md:text-[3rem] font-semibold text-[1.5rem] text-center ">
            {" "}
            <TypeWriterEffect
              textStyle={{
                fontFamily: "",
                color: "white",
                fontWeight: 700,
                display: "block",
              }}
              startDelay={2000}
              cursorColor="white"
              multiText={["Marine support services"]}
              multiTextDelay={2000}
              typeSpeed={60}
            />
          </h1>
        </div>
      </div>

      {/* content */}
      <div className="max-w-[1200px] mx-auto w-full h-auto">
        <div className="flex flex-row gap-3 flex-wrap items-center justify-center mt-4">
          <button className="btn btn-">Marine Advisory</button>
          <Link
            activeClass="active"
            to="marine"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-">diving services</button>
          </Link>

          <Link
            activeClass="active"
            to="waste"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-">waste management service</button>
          </Link>

          <Link
            activeClass="active"
            to="dredging"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-">dredging</button>
          </Link>

          <Link
            activeClass="active"
            to="maintenance"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-">rig and vesssel maintenance</button>
          </Link>
        </div>
        <div className="divider" />

        {/* content */}
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div>
              {" "}
              <div className="col-span-12 flex flex-col w-full h-auto mt-10 px-5" id="marine">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                    Marine Advisory Services
                  </h1>
                </div>

                {/* write up image */}
                <div className="w-full h-[300px]">
                  <img
                    src={shipImage}
                    alt="construction image"
                    className="w-full object-cover h-[300px]"
                  />
                </div>

                {/* general introduction write up */}
                <section className="py-4">
                  <p className="text-lg">
                    With years of experience in ensuring safe, timely and cost
                    effective services for all marine and offshore operations,
                    Western Pacific Solutions is well equipped to advise and
                    handle the following:
                  </p>
                  <ul className="ml-5 py-3">
                    <li className="flex gap-3">
                      <span className="text-2xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Rig move.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">
                        <BsCheck2Circle />
                      </span>
                      <span>General Marine Consultancy.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Vessel Assurance and Marine Surveys.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        Audits and Inspection for Vessels, Rigs and Barges.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Fleets Management.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Towage Services</span>
                    </li>
                  </ul>
                </section>

                {/* image gallery  */}
                <section></section>
              </div>
              {/* Diving services */}
              <div
                className="col-span-12 flex flex-col w-full h-auto mt-10 px-5"
                id="diving"
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                    Diving Services
                  </h1>
                </div>

                {/* write up image */}
                <div className="w-full h-[300px]">
                  <img
                    src={diving}
                    alt="construction image"
                    className="w-full object-cover h-[300px]"
                  />
                </div>

                {/* general introduction write up */}
                <section className="py-4">
                  <p className="text-lg">
                    Western Pacific Solutions is staffed with certified divers
                    with the latest diving kits and a real time video footage
                    equipment to satisfy your underwater needs.
                  </p>
                  <ul>
                    <li className="border-b py-2 flex items-center gap-3">
                      {" "}
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Rudder, shaft and propeller inspection.</span>
                    </li>
                    <li className="border-b py-2  flex items-center gap-3">
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Installation of zinc anode.</span>
                    </li>
                    <li className="border-b py-2 flex items-center gap-3">
                      {" "}
                      <span className="text-3xl ">
                        <BsCheck2Circle />
                      </span>
                      <span> Hull inspection.</span>
                    </li>
                    <li className="border-b py-2 flex items-center gap-3">
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Barnacle scraping.</span>
                    </li>
                    <li className="border-b py-2 flex items-center gap-3">
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>Echo sounder inspection.</span>
                    </li>
                  </ul>
                </section>

                {/* image gallery  */}
                <section></section>
              </div>
              {/* Waste Management Service */}
              <div
                className="col-span-12 flex flex-col w-full h-auto mt-10 px-5"
                id="waste"
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                    Waste Management Services
                  </h1>
                </div>

                {/* write up image */}
                <div className="w-full h-[300px]">
                  <img
                    src={Waste}
                    alt="construction image"
                    className="w-full object-cover h-[300px]"
                  />
                </div>

                {/* general introduction write up */}
                <section className="py-4">
                  <p className="text-lg">
                    Removal of hydrocarbon residue and other toxic waste for the
                    purpose of achieving clean ballast or a gas-free tank for
                    inspection or repair works; Western Pacific Solutions have a
                    team of cleaners who understands the global tank cleaning
                    practice. We have in time past helped our clients improve
                    safety, reduce the risk of contamination and minimize
                    downtime.
                  </p>
                  <p>
                    <ul className="text-md md:text-xl font-bold">
                      <li className="border-b py-2">
                        {" "}
                        Storage Tanks and Vessel cleaning
                      </li>
                      <li className="border-b py-2">
                        Waste Management services of all sorts with a specific
                        interest in Marine Wastes
                      </li>
                      <li className="border-b py-2">
                        {" "}
                        Waste Management (Hazardous and Non Hazardous)
                      </li>
                      <li className="border-b py-2">
                        Oil spill Response and Remedation
                      </li>
                      <li className="border-b py-2">
                        Pollution Control/Sewage Management
                      </li>
                      <li className="border-b py-2">
                        Advisory services on Waste Management
                      </li>
                    </ul>
                  </p>
                </section>

                {/* image gallery  */}
                <section></section>
              </div>
              {/* Dredging */}
              <div
                className="col-span-12 flex flex-col w-full h-auto mt-10 px-5"
                id="dredging"
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                    Dredging Services
                  </h1>
                </div>

                {/* write up image */}
                <div className="w-full h-[500px]">
                  <img
                    src={dredging}
                    alt="construction image"
                    className="w-full object-cover h-[500px]"
                  />
                </div>

                {/* general introduction write up */}
                <section className="py-4">
                  <p className="text-lg">
                    Western Pacific Solutions has a highly equipped dredging
                    subsidiary department which provides dredging services,
                    canalization, flood and erosion control, land reclamation
                    and land refill. Staffed with motivated individuals who are
                    certified internationally in the field of marine and
                    offshore dredging, our expertise and strict adherence to
                    global practice have distinguished us among contemporaries.
                  </p>
                </section>

                {/* image gallery  */}
                <section></section>
              </div>

              {/* Rig and Vessel maintenance */}
              <div
                className="col-span-12 flex flex-col w-full h-auto mt-10 px-5"
                id="maintenance"
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                  Rig and Vessel maintenance
                  </h1>
                </div>

                {/* write up image */}
                <div className="w-full h-[500px]">
                  <img
                    src={vessel}
                    alt="construction image"
                    className="w-full object-cover h-[500px]"
                  />
                </div>

                {/* general introduction write up */}
                <section className="py-4">
                  <p className="text-lg">
                  Having a pool of dedicated men with years of experience in Marine
              industry, we are capable of rendering the best of afloat
              maintenance works Our afloat works includes:
                  </p>
                  <p className="md:text-xl text-md ml-5">
              <ul className="list-disc py-3">
                <li>UT measurement of hull, deck and tanks.</li>
                <li>Transportation infrastructure</li>
                <li>
                  {" "}
                  Fabrication, installation and reinforcement of handrail,
                  staircase, monkey island etc.
                </li>
                <li> Cropping and plating of worn out plates.</li>
                <li>
                  {" "}
                  Blasting and painting of above water, deck and superstructure.
                </li>
                <li> Overhaul and servicing of engines and generator.</li>
                <li> Servicing and calibration of anchor chain.</li>
              </ul>
            </p>
                </section>

                {/* image gallery  */}
                <section></section>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
      <BackToUp className='mr-14'>
        <ion-icon name="arrow-up-outline"></ion-icon>
        </BackToUp>
    </div>
  );
};

export default MarineService;
