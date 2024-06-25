import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import constructionImg from "../assets/steel-construction.jpg";
import constructionImage from "../assets/constructionnew.jpg";
import { FaFilePdf } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import { Link } from "react-scroll";
import BackToUp from "@uiw/react-back-to-top";
import p1 from "../assets/wp1/1.jpg"
import p2 from "../assets/wp1/2.jpg"
import p3 from "../assets/wp1/3.jpg"
import p4 from "../assets/wp1/4.jpg"
import p5 from "../assets/wp1/5.jpg"
import p6 from "../assets/wp1/6.jpg"
import pw1 from "../assets/wp2/1.jpg"
import pw2 from "../assets/wp2/2.jpg"
import pw3 from "../assets/wp2/3.jpg"
import pw4 from "../assets/wp2/4.jpg"
import pw5 from "../assets/wp2/5.jpg"
import pw6 from "../assets/wp2/6.jpg"
import pw7 from "../assets/wp2/7.jpg"
import pwe1 from "../assets/wp3/1.jpg"
import pwe2 from "../assets/wp3/2.jpg"
import pwe3 from "../assets/wp3/3.jpg"
import pwe4 from "../assets/wp3/4.jpg"
import pwe5 from "../assets/wp3/5.jpg"
import pwe6 from "../assets/wp3/6.jpg"
import pwe7 from "../assets/wp3/7.jpg"
import pre1 from "../assets/wp4/1.jpg"
import pre2 from "../assets/wp4/2.jpg"
import pre3 from "../assets/wp4/3.jpg"
import pre4 from "../assets/wp4/4.jpg"
import pre5 from "../assets/wp4/5.jpg"
import pre6 from "../assets/wp4/6.jpg"
import pre7 from "../assets/wp4/7.jpg"
import pre8 from "../assets/wp4/8.jpg"
import pre9 from "../assets/wp4/9.jpg"
import pre10 from "../assets/wp4/10.jpg"
import pol1 from "../assets/wp5/1.jpg"
import pie1 from "../assets/wp6/1.jpg"
import pie2 from "../assets/wp6/2.jpg"
import pie3 from "../assets/wp6/3.jpg"
import pie4 from "../assets/wp6/4.jpg"
import aw1 from "../assets/awards/aw1.png"
import aw2 from "../assets/awards/aw2.png"
import bb from "../assets/before1.jpg"
import bbb from "../assets/before2.jpg"
import bbbb from "../assets/after1.jpg"
import bbbbb from "../assets/after2.jpg"

const Construction = () => {
  return (
    <div className="font-bricolage">
      {/* image container */}
      <div className="w-full h-[200px] md:h-[300px] relative">
        {/* img overlay */}
        <div className="bg-[#333] absolute top-0 h-full w-full z-10 opacity-70"></div>
        <img
          src={constructionImg}
          alt="construction-image"
          className="absolute top-0 object-cover w-full h-[inherit]"
        />
        <div className="relative flex items-center justify-center w-full h-full z-40">
          <h1 className="uppercase text-center text-white text-[1rem] md:text-[3rem] font-semibold">
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
              multiText={["Construction and remodelling services"]}
              multiTextDelay={2000}
              typeSpeed={60}
            />
          </h1>
        </div>
      </div>
      <div className="md:hidden flex flex-row gap-3 flex-wrap items-center justify-center mt-4">
        <button className="btn btn-">Introduction</button>
        <Link
          activeClass="active"
          to="activities"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">Our activities</button>
        </Link>

        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">our clients</button>
        </Link>

        <Link
          activeClass="active"
          to="completed"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">Completed projects</button>
        </Link>

        <Link
          activeClass="active"
          to="ongoing"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">Ongoing projects</button>
        </Link>

        <Link
          activeClass="active"
          to="pipeline"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">projects in pipeline</button>
        </Link>
        <Link
          activeClass="active"
          to="awards"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">awards</button>
        </Link>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="btn btn-">gallery</button>
        </Link>
      </div>
      <div className="divider" />
      {/* content */}
      <div className="max-w-[1200px] mx-auto w-full h-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4 hidden md:flex border-r-2 border-gray- top-0 relative">
            {/* side links */}
            <div className="mt-14">
              <ul className="uppercase flex flex-col w-full items-start font-semibold justify-center text-[1.2rem] ">
                <Link
                  activeClass="active"
                  to="introduction"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      introduction
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="activities"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2"
                    >
                      Our Activities
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="clients"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      Our clients
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="completed"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      Completed projects
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="ongoing"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      ongoing projects
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="pipeline"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      Projects in the pipeline
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="awards"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      Award certificates
                    </a>
                  </li>
                </Link>
                <Link
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="w-full"
                >
                  <li className="w-full">
                    <a
                      href="#"
                      className="block hover:border-l-primary hover:border-l-4 hover:bg-[#8e8ef9]  hover:text-white transition-all text-gray-600 w-full py-4 px-3 block border-b-2 "
                    >
                      Gallery
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col w-full h-auto mt-10 px-5">
            <div
              className="flex flex-col-reverse md:flex-row justify-between items-center"
              id="introduction"
            >
              <div>
                <button className="btn btn-primary text-white">
                  <FaFilePdf /> &nbsp; Download pdf
                </button>
              </div>
            </div>

            {/* write up image */}
            <div className="w-full h-[300px]">
              <img
                src={constructionImage}
                alt="construction image"
                className="w-full object-cover h-[300px]"
              />
            </div>

            {/* general introduction write up */}
            <section className="py-4">
              <p className="text-lg">
                Established in 2018 with a burning desire to provide a
                first-class integrated services and other business solutions,{" "}
                <b>Western Pacific Solutions Limited</b> has grown over the
                years to be a major player in the maritime industry and recently
                in the construction services sector. Our journey into
                construction services began in year 2020 when the whole world
                was just recovering from the IMPACT of the COVID-19 pandemic.
                Kwara State Ministry of Agriculture and Rural Development took a
                chance on us by entrusting us with the supply of office
                furniture, classroom chairs and other accessories for some newly
                built structures. While on that, there was a need for
                construction of additional 6 units of classrooms in
                Comprehensive High School Ajase, Kwara State. We bidded for the
                job and won the contract and the rest has been history. We have
                expanded our horizon since that time till now, doing a lot of
                construction, renovation and remodeling works. Though commencing
                operation in 2018, our key personnel have been key players in
                the sectors where we currently have interests. We can
                conveniently boast of a combined experience of more than 20
                years. This wealth of experience has provided competitive
                advantage for Western Pacific Solutions in provision of our
                services.
                <br />
                <b>OUR MISSION</b>
                <br />
                To provide unparalleled timely and quality services and product
                delivery of all sorts to our numerous customers.
                <br />
                <b>OUR VISION</b>
                <br />
                To be the leading construction and procurement service provider
                in Africa, by becoming a strategic partner with our client in
                execution of their businesses.
              </p>
            </section>

            {/* our activities  */}
            <section id="activities">
              <h1 className="uppercase font-bold text-3xl py-4 ">
                Our activities.
              </h1>
              <p>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2"> Construction Services</li>
                  <li className="border-b py-2">Remodelling Services</li>
                  <li className="border-b py-2"> Renovation</li>
                </ul>
              </p>
            </section>

            {/* our clients */}
            <section className="mt-10" id="clients">
              <h1 className="uppercase font-bold text-3xl py-4 ">
                Our clients.{" "}
              </h1>
              <p>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2">
                    {" "}
                    Baobab Microfinance Bank, Lagos
                  </li>
                  <li className="border-b py-2">
                    Olivet Baptist High School, Oyo
                  </li>
                  <li className="border-b py-2">
                    Alert Microfinance Bank, Lagos (Prospective)
                  </li>
                  <li className="border-b py-2">
                    Taj Bank, Abuja (Prospective)
                  </li>
                  <li className="border-b py-2">
                    Deep Frontline Shippers, Uyo (Prospective)
                  </li>
                </ul>
              </p>
            </section>

            {/*completed projects*/}
            <section className="mt-10" id="completed">
              <h1 className="uppercase font-bold text-3xl py-4 ">
                completed projects.{" "}
              </h1>
              <p>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      {" "}
                      Construction and Remodelling of Baobab Microfinance Bank
                      Limited,{" "}
                    </span>
                    <span className="text-sm block font-bold">
                      <table>
                        <tr>
                          <td>Aba Branch</td>
                          <td>2022</td>
                          {/* <td>Lokoja Branch</td>
                                <td>Gwamaja Branch Kano</td>
                                <td>France Road Branch</td>
                                <td>Uyo Branch</td> */}
                        </tr>

                        <tr>
                          <td>Lokoja Branch</td>
                          <td>2022 - 2023</td>
                        </tr>

                        <tr>
                          <td>Gwamaja Branch Kano</td>
                          <td>2023</td>
                        </tr>

                        <tr>
                          <td>France Road Branch</td>
                          <td>2023</td>
                        </tr>

                        <tr>
                          <td>Uyo Branch</td>
                          <td>2023</td>
                        </tr>

                        <tr>
                          {/* <td>2022</td>
                                <td>2022 - 2023</td>
                                <td>2023</td>
                                <td>2023</td>
                                <td>2023</td> */}
                        </tr>
                      </table>
                    </span>
                  </li>
                </ul>
              </p>
            </section>

            {/*ongoing projects*/}
            <section className="mt-10" id="ongoing">
              <h1 className="uppercase font-bold text-3xl py-4 ">
                ongoing projects.{" "}
              </h1>
              <p>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction of 5-bedroom duplex @ Umuchieze Mbaise Imo
                      state
                    </span>
                    <span className="text-xs block font-bold">2023</span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction of 5-bedroom duplex @ Nnono Oboro Ikwuano
                      Abia state{" "}
                    </span>
                    <span className="text-xs block font-bold">2023</span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      {" "}
                      Construction of 4-bedroom duplex at Restoration Estate,
                      Igbo Etche Rivers state{" "}
                    </span>
                    <span className="text-xs block font-bold">2023</span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction of 6-bedroom duplex @ Ngboko Okpulo, Aba Abia
                      state{" "}
                    </span>
                    <span className="text-xs block font-bold">2023</span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction and Remodelling of Baobab Microfinance Bank
                      Limited, Benin Branch{" "}
                    </span>
                    <span className="text-xs block font-bold">2023</span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction of 100-seater Pavillion for Basketball Court,
                      Olivet Baptist High School, Oyo
                    </span>
                    <span className="text-xs block font-bold">2023</span>
                  </li>
                </ul>
              </p>
            </section>

            {/*projects in the pipeline*/}
            <section className="mt-10" id="pipeline">
              <h1 className="uppercase font-bold text-3xl py-4 ">
                Projects in the pipeline.{" "}
              </h1>
              <p>
                <ul className="text-lg md:text-xl">
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction of Office Buildings, Staff Quarters, Training
                      Centers for Deep Frontline Shippers, Uyo.
                    </span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      Construction and Remodelling of Office Building for Alert
                      Microfinance Bank Limited, Lagos.
                    </span>
                  </li>
                  <li className="border-b py-2">
                    {" "}
                    <span>
                      {" "}
                      Construction and Remodelling of Office Building for TAJ
                      Bank Limited{" "}
                    </span>
                  </li>
                </ul>
              </p>
            </section>

            {/* image awards  */}
            {/* <section id="awards" className="my-16">
              <div>
                <h1 className="text-4xl uppercase font-bold">Awards.</h1>
              </div>

              <div>
                <img src={aw1} alt="" />
                <img src={aw2} alt="" />
              </div>
            </section> */}

            {/* image gallery  */}
            <section id="gallery" className="my-10">
              <h1 className="text-4xl font-bold uppercase py-5">Gallery. </h1>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black">
                This is a 6-flat development with 2 flats on each of the 3 levels, located in Okota, Isolo, Lagos.
                </h1>

              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={p1} alt="project-image-1" />
                <img src={p2} alt="project-image-1" />
                <img src={p6} alt="project-image-1" />
              </div>
              </div>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black">
                This is a project in Asamu estate, Bucknor, Isheri Osun, The foundation process including the manual piling process
                </h1>
              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={pw2} alt="project-image-1" />
                <img src={pw3} alt="project-image-1" />
                <img src={pw4} alt="project-image-1" />
                <img src={pw5} alt="project-image-1" />
                <img src={pw6} alt="project-image-1" />
                <img src={pw7} alt="project-image-1" />
              </div>
              </div>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black">
                4 bedroom duplex at GRA along Ilobu road , Oshogbo. Osun state
                </h1>
              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={pwe1} alt="project-image-1" />
                <img src={pwe2} alt="project-image-1" />
                <img src={pwe3} alt="project-image-1" />
                <img src={pwe4} alt="project-image-1" />
                <img src={pwe5} alt="project-image-1" />
                <img src={pwe6} alt="project-image-1" />
                <img src={pwe7} alt="project-image-1" />
              </div>
              </div>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black">
                Pere Owei Hotel, still under construction
                That swimming pool is also in that hotel, 45 bed hotel , Under G Area, Ogbomosho. OYO state
                </h1>
              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={pre1} alt="project-image-1" />
                <img src={pre2} alt="project-image-1" />
                <img src={pre4} alt="project-image-1" />
                <img src={pre6} alt="project-image-1" />
                <img src={pre7} alt="project-image-1" />
                <img src={pre9} alt="project-image-1" />
                <img src={pre10} alt="project-image-1" />
              </div>
              </div>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black">10,000 liters water reservoir, Nigerian Navy College of Health Sciences, Ira, Kwara State </h1>
              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={pol1} alt="project-image-1" />
              </div>
              </div>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black">Construction and Remodelling of Baobab Microfinance Bank
                      Limited
                </h1>
              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={bb} alt="project-image-1" />
                <img src={bbb} alt="project-image-1" />
                <img src={bbbb} alt="project-image-1" />
                <img src={bbbbb} alt="project-image-1" />
              </div>
              </div>
              <div>
                <h1 className="p-5 font-semibold text-xl capitalize border border-black"> 8 bedroom duplex
                </h1>
              <div className="w-full p-5 pb-10 mx-auto mb-10 gap-5 md:columns-3 space-y-5">
                <img src={pie2} alt="project-image-1" />
                <img src={pie3} alt="project-image-1" />
                <img src={pie4} alt="project-image-1" />
              </div>
              </div>
            </section>
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

export default Construction;
