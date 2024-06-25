import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bourbon from '../../assets/Bourbon.png'
import Deltek from '../../assets/Deltek.png'
import Foltoks from '../../assets/Foltoks.png'
import Hios from '../../assets/HIOS.png'
import Pearl from '../../assets/Pearl HPW.png'
import Shipside from '../../assets/Shipside.png'
import Splatforms from '../../assets/SplatForms.png'
import Vms from '../../assets/VMS.png'
import Anl1 from '../../assets/ANL 1.png'
import Anl from '../../assets/ANL.png'
import Baobab from '../../assets/Baobab.png'
import TypeWriterEffect from 'react-typewriter-effect'
import image1 from "../../assets/before1.jpg"
import image2 from "../../assets/before2.jpg"
import image3 from "../../assets/after1.jpg"
import image4 from "../../assets/after2.jpg"
import image5 from "../../assets/kbefore.jpg"
import image6 from "../../assets/kbefore2.jpg"
import image7 from "../../assets/kafter.jpg"
import image8 from "../../assets/kafter2.jpg"
import new1 from "../../assets/new-clients/01.jpg"
import new2 from "../../assets/new-clients/02.jpg"
import new3 from "../../assets/new-clients/03.jpg"
import new4 from "../../assets/new-clients/04.jpg"
import new5 from "../../assets/new-clients/05.jpg"
import new6 from "../../assets/new-clients/06.jpg"
import { BsArrowRight } from "react-icons/bs"
// import Gallery from "../Gallery/Gallery";
// import Swipper from "../swipper/Swipper";
import Footer from "../Footer/Footer";


class SlickSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div id="partners" className="py-32">
        <h1
          className="px-5 text-5xl font-bold tracking-wider uppercase flex items-center justify-center gap-3"
        >
          our clients
        </h1>
        <div className="mx-auto pt-10 md:pt-20 md:w-[60%] overflow-hidden">
          <Slider {...settings}>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Bourbon}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Deltek}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Foltoks}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Hios}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Pearl}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Shipside} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Splatforms} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Shipside} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Vms} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Anl1} className="mx-automx-auto flex items-center justify-center h-full " />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Anl} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={new1} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={new2} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={new3} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={new4} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={new5} className="mx-auto flex items-center justify-center h-full" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={new6} className="mx-auto flex items-center justify-center h-full" />
            </div>
          </Slider>
        </div>

        {/*----partners table---*/}
        <div className="w-full flex  flex-col items-center justify-center px-5 text-center">
          {/* <div className="grid grid-cols-12">
            <div className="md:col-span-6 col-span-12 md:border">
              {" "}
              <h1 className="text-blue-700 py-5 font-bold flex justify-center items-center text-xl md:text-4xl mt-12 px-10">
                {" "}
                <span className="w-10 h-10 bg-blue-700"></span>
                <span className="">Marine Support Services</span>
              </h1>
              <ul className="ml-5 py-3 text-2xl font-semibold">
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-left"
                >
                  <span className="text-2xl">
                    <img src={Bourbon} alt="" className="w-40 h-auto" />
                  </span>
                  <span>Bourbon Interoil Nigeria limited</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-left"
                >
                  <span className="text-2xl">
                    <img src={Anl} alt="" className="w-40 h-auto" />
                  </span>
                  <span> Awaritse Nigeria Limited.</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-left"
                >
                  <span className="text-2xl">
                    <img src={Deltek} alt="" className="w-40 h-auto" />
                  </span>
                  <span>DeltaTek Offshore Services.</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-right"
                >
                  <span className="text-2xl">
                    <img src={Foltoks} alt="" className="w-40 h-auto" />
                  </span>
                  <span> Foltoks Energy Resources Limited</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-right"
                >
                  <span className="text-2xl">
                    <img src={Shipside} alt="" className="w-40 h-auto" />
                  </span>
                  <span> Shipside Drydock Limited</span>
                </li>
                <li
                  className="flex  flex-col items-center justify-center gap-3"
                  data-aos="flip-right"
                >
                  <span className="text-2xl">
                    <img src={Hios} alt="" className="w-40 h-auto" />
                  </span>
                  <span>Homeland Integrated Offshore Services Ltd</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-right"
                >
                  <span className="text-2xl">
                    <img src={Pearl} alt="" className="w-40 h-auto" />
                  </span>
                  <span> Pearl HPW Limited</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-left"
                >
                  <span className="text-2xl">
                    <img src={Splatforms} alt="" className="w-40 h-auto" />
                  </span>
                  <span>SR Platforms</span>
                </li>
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-left"
                >
                  <span className="text-2xl">
                    <img src={Vms} alt="" className="w-40 h-auto" />
                  </span>
                  <span> Vettal Mega Nigeria Limited</span>
                </li>
              </ul>
            </div>
            <div className="md:col-span-6 col-span-12 md:border">
              <h1 className="text-orange-600 py-5 font-bold flex justify-center items-center text-xl md:text-4xl mt-12 px-10">
                <span className="w-10 h-10 bg-orange-600"></span>
                <span>Construction/Renovation Works</span>
              </h1>
              <ul className="ml-5 py-3 text-2xl font-semibold">
                <li
                  className="flex flex-col items-center justify-center gap-3"
                  data-aos="flip-right"
                >
                  <span className="text-2xl">
                    <img src={Baobab} alt="" className="w-40 h-auto" />
                  </span>
                  <span>Baobab Microfinance Bank Ltd.</span>
                </li>
                <div className="mt-10">

                  <label htmlFor="my-modal-3" className="btn">
                    View Projects
                  </label>
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
                        Rennovation Projects
                      </h3>

                      <h2 className="uppercase my-6">Before</h2>
                      <div className="grid grid-cols-12 gap-3">
                        <div className="md:col-span-6 col-span-12">
                          <div className="carousel-item">
                            <img src={image3} className="rounded-lg" />
                          </div>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                          <div className="carousel-item">
                            <img src={image4} className="rounded-lg" />
                          </div>
                        </div>
                      </div>

                      <h2 className="uppercase my-6">After</h2>
                      <div className="grid grid-cols-12 gap-3">
                        <div className="md:col-span-6 col-span-12">
                          <div className="carousel-item">
                            <img src={image3} className="rounded-lg" />
                          </div>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                          <div className="carousel-item">
                            <img src={image4} className="rounded-lg" />
                          </div>
                        </div>
                      </div>
                      <div className="carousel carousel-center rounded-box"></div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div> */}

          <div className="mx-auto w-full pt-10 md:pt-20 md:w-[60%] overflow-hidden">
            {/* <Slider {...settings}>
              <div className="container bg-slate-200 max-w-5xl p-5 flex items-center justify-center h-80">
                <img
                  src={image1}
                  className="mx-auto flex items-center justify-center h-full"
                />
                <h1 className="uppercase text-2xl">Before</h1>
              </div>
              <div className="container bg-slate-200 max-w-5xl p-2 flex items-center justify-center h-80">
                <img
                  src={image3}
                  className="mx-auto flex items-center justify-center h-full"
                />
              </div>
              <div className="container bg-slate-200 max-w-5xl p-2 flex items-center justify-center h-80">
                <img
                  src={image4}
                  className="mx-auto flex items-center justify-center h-full"
                />
                <h1 className="uppercase text-2xl">After</h1>
              </div>
              <div className="container max-w-5xl px-5 p-5 flex items-center justify-center h-80">
                <h1 className="uppercase text-8xl">.</h1>
              </div>
              <div className="container bg-zinc-400 max-w-5xl px-5 p-5 flex items-center justify-center h-80">
                <img
                  src={image5}
                  className="mx-auto flex items-center justify-center h-full"
                />
                <h1 className="uppercase text-2xl">Before</h1>
              </div>

              <div className="container bg-zinc-400 max-w-5xl p-2 flex items-center justify-center h-80">
                <img
                  src={image7}
                  className="mx-auto flex items-center justify-center h-full"
                />
              </div>
              <div className="container bg-zinc-400 max-w-5xl p-2 flex items-center justify-center h-80">
                <img
                  src={image8}
                  className="mx-auto flex items-center justify-center h-full"
                />
                <h1 className="uppercase text-2xl">After</h1>
              </div>
              <div className="container max-w-5xl px-5 p-5 flex items-center justify-center h-80">
                <h1 className="uppercase text-8xl">.</h1>
              </div>
            </Slider> */}
                {/* <Gallery/> */}
            {/* <Swipper/> */}
          </div>
          {/* <div className="flex items-center justify-center w-full h-">
            <div className="grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 flex items-center ">
                <h1 className="uppercase text-2xl">Before</h1>
                <div>
                  <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
                    <img
                      src={image1}
                      alt="project-image-1"
                      data-aos="zoom-in"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex items-center justify-center">
                <h1 className="uppercase text-2xl">After</h1>
                <div>
                  <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
                    <img
                      src={image3}
                      alt="project-image-1"
                      data-aos="zoom-in"
                    />
                    <img
                      src={image4}
                      alt="project-image-1"
                      data-aos="zoom-in"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 flex  flex-colitems-center ">
                <h1 className="uppercase text-2xl">Before</h1>
                <div>
                  <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
                    <img
                      src={image5}
                      alt="project-image-1"
                      data-aos="zoom-in"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex items-center justify-center">
                <h1 className="uppercase text-2xl">After</h1>
                <div>
                  <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-4 space-y-5">
                    <img
                      src={image7}
                      alt="project-image-1"
                      data-aos="zoom-in"
                    />
                    <img
                      src={image8}
                      alt="project-image-1"
                      data-aos="zoom-in"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <table>
            <tr>
              <th></th>
              <th>Company Name</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>
                <img src={Bourbon} alt="" className="w-20 h-20" />
              </td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </table> */}
        </div>
      </div>
    );
  }
}

export default SlickSlider;
