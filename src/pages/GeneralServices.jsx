import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import advisory from "../assets/advisory.webp";
import { FaFilePdf } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import Footer from "../components/Footer/Footer";
import aeralShip from "../assets/arieal-view.jpg";
import MarineAdvisory from "../components/MarineServices/MarineAdvisory";
import Diving from "../components/MarineServices/Diving";
import dredging from "../assets/Dredging.png";
import Waste from "../assets/dirt.jpg";
import vessel from "../assets/rig-and-vessel-maintenance.jpg";
import * as Scroll from "react-scroll";
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

const GeneralServices = () => {
  return (
    <div className="font-bricolage">
      {/* image container */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        {/* img overlay */}
        <div className="bg-[#333] absolute top-0 h-full w-full z-10 opacity-70"></div>
        <img
          src={advisory}
          alt="construction-image"
          className="absolute top-0 object-cover w-full h-[inherit]"
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
              multiText={["general services"]}
              multiTextDelay={2000}
              typeSpeed={60}
            />
          </h1>
        </div>
      </div>

      {/* content */}
      <div className="max-w-[1200px] mx-auto w-full h-auto">
        <div className="flex flex-row gap-3 flex-wrap items-center justify-center mt-4">
          <button className="btn btn-">introduction </button>
          <Link
            activeClass="active"
            to="ourservices"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-">our services</button>
          </Link>

          <Link
            activeClass="active"
            to="training"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="btn btn-">Training and Development</button>
          </Link>
        </div>
        <div className="divider" />

        {/* content */}
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div>
              {" "}
              <div
                className="col-span-12 flex flex-col w-full h-auto mt-10 px-5"
                id="introduction"
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                    introduction
                  </h1>
                </div>

                {/* write up image */}

                <section className="py-4">
                  <p className="text-lg">
                    In today's dynamic and competitive business landscape,
                    navigating the complexities of the corporate world can be
                    challenging. To thrive and excel, companies need more than
                    just a great product or service – they need strategic
                    insights, expert guidance, and a partner who understands
                    their unique challenges and goals. This is where Business
                    Advisory and Consulting services come into play. At{" "}
                    <b>Western Pacific Solutions Limited</b>, we specialize in
                    providing comprehensive Business Advisory and Consulting
                    services tailored to meet the specific needs of businesses
                    across various industries. Our experienced team of
                    consultants brings a wealth of knowledge, expertise, and
                    innovative solutions to help your business not only survive
                    but also thrive in a rapidly evolving marketplace. Our
                    Business Advisory and Consulting Services comprises a wide
                    range of offerings services designed to assist organizations
                    in achieving their goals and proffering solutions to
                    challenging business exigencies. These services are
                    delivered by experts who bring a fresh perspective, industry
                    insights, and a deep understanding of business strategies to
                    the table.
                  </p>
                </section>
              </div>
              <div
                className="col-span-12 flex flex-col w-full h-auto mt-10 px-5"
                id="ourservices"
              >
                <div className="flex flex-row justify-between items-center">
                  <h1 className="uppercase font-bold text-3xl py-4 ">
                    our services
                  </h1>
                </div>

                <section className="py-4">
                  <p className="text-lg">
                    <b>1. Strategic Planning: </b>
                    Successful businesses have a clear vision and a well-defined
                    strategy. We work closely with you to develop and execute
                    strategic plans that align with your goals, ensuring
                    sustainable growth and profitability.
                    <br />
                    <b>2. Financial Management: </b>
                    Sound financial management is the cornerstone of any
                    successful business. Our experts provide guidance on
                    budgeting, cash flow management, financial analysis, and
                    more to keep your business financially healthy.
                    <br />
                    <b>3. Market Research and Analysis: </b>
                    Understanding your market and competitors is crucial for
                    making informed decisions. We conduct in-depth market
                    research and analysis to help you identify opportunities,
                    mitigate risks, and stay ahead of the competition.
                    <br />
                    <b>4. Operations Improvement: </b>
                    Efficiency and productivity are essential for profitability.
                    We assess your operations and provide recommendations to
                    streamline processes and enhance productivity.
                    <br />
                    <b>5. Risk Management: </b>
                    Every business face risks. We help you identify, assess, and
                    manage risks effectively, ensuring your business is
                    well-prepared to handle unexpected challenges.
                    <br />
                    <b>6. Technology Integration: </b>
                    In today's digital age, technology plays a pivotal role in
                    business success. We offer guidance on adopting and
                    integrating the right technology solutions to improve
                    operations and customer experiences.
                    <br />
                    <b>7. Mergers and Acquisitions: </b>
                    Navigating mergers, acquisitions, and partnerships requires
                    expertise. We provide strategic advice and support
                    throughout the entire process, from due diligence to
                    integration.


                    
                  </p>

                  <div>
                    <h1 className="text-xl">Why Choose Us?</h1>
                    <ul>
                      <li>1.	Experience: Our team of seasoned professionals brings years of experience and a diverse skill set to the table.</li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToUp className="mr-14">
        <ion-icon name="arrow-up-outline"></ion-icon>
      </BackToUp>
    </div>
  );
};

export default GeneralServices;
