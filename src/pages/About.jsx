import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import Result from "../assets/business.png";
import Safety from "../assets/helment.png";
import Responsibility from "../assets/honesty.png";
import Integrity from "../assets/outstanding..png";
import Excellence from "../assets/service.png";
import Shiprepair from "../assets/ship-repair.jpg";
import CompanyProfile from "../assets/ship-sailing.jpg";
import Footer from "../components/Footer/Footer";


const About = () => {
  return (
    <div className="font-bricolage">
      {" "}
      <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
        <div className="col-span-12 lg:col-span-6">
          <div
            className="w-full lg:h-[700px] h-[200px]"
            id="image-div clip-path-bottom-right"
          >
            <img
              src={CompanyProfile}
              alt="sea-image"
              className="h-full w-full object-cover"
              id="clip-path-bottom-right"
            />
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 md:pt-0"
        >
          <div id="who" className="lg:pb-10 pr-4 lg:pr-0">
            <h1 className="text-jet text-[2rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-0 ">
              <span className="text-blue-600 flex flex-col gap-3">
                <span className="text-[#021D27]">OUR</span>{" "}
                <span>
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "rgb(34, 34, 233)",
                      fontWeight: 700,
                      display: "",
                    }}
                    startDelay={2000}
                    cursorColor="rgb(34, 34, 233)"
                    multiText={["Company profile"]}
                    multiTextDelay={2000}
                    typeSpeed={60}
                  />
                </span>
              </span>
            </h1>
            <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
              Established in 2018 with a burning desire to meet the growing
              demand for quality service delivery in the maritime and Oil & Gas
              sectors, Western Pacific Solutions Limited has grown to be a major
              marine support service companyin Nigeria and other West African
              countries.
              <div>
                <h1 className="uppercase pt-3 font-semibold flex md:items-start md:justify-start items-center justify-center text-2xl">
                  Our Values:
                </h1>
                <div className="flex md:flex-row flex-col py-5 gap-2 md:gap-5">
                  <div className="flex gap-5 justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                      <img src={Responsibility} className="w-20" alt="" />
                      <span className="uppercase text-sm">Responsibility</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src={Excellence} className="w-20" alt="" />
                      <span className="uppercase text-sm">Excellence</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                    <div className="flex flex-col items-center justify-center">
                      <img src={Result} className="w-20" alt="" />
                      <span className="uppercase text-sm flex md:flex-row gap-1 flex-col items-center">
                        <span>Result</span>
                        <span>Oriented</span>
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img src={Integrity} className="w-20" alt="" />
                      <span className="uppercase text-sm">Integrity</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-5">
                    <div className="flex flex-col items-center justify-center">
                      <img src={Safety} className="w-20" alt="" />
                      <span className="uppercase text-sm">Safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12  flex flex-col-reverse">
        <div
          className="lg:col-span-6 col-span-12 blue-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full bg-white"
        >
          <div className="flex md:flex-row flex-col gap-6">
            {" "}
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              Within its few years of existence, Western Pacific has proven to
              be the leading and fastest-growing company dealing majorly with
              Marine Support Services, Waste Management Services and Engineering
              Designs. Our time and cost-effective approach to demands has
              earned us commendations and recommendations from our clients who
              are satisfied with our services, at all times and in all places.
            </p>
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              We provide safe, efficient, reliable and timely services to suit
              the need and requirements of our clients. Established and managed
              by men with a wealth of experience in our chosen areas of service
              delivery, we are confident that our expertise is adequate to
              satisfy safe, efficient and cost-effective services when required.
            </p>
          </div>
        </div>
        <div
          className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
          id="clip-path-top-left"
        >
          <img
            src={Shiprepair}
            alt="construction-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
