import React from "react";
import aeroplaneImg from "../assets/airplane-sunset.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import airwings from "../assets/airwing.jpg"
import airengine from "../components/Aviation/turbine-airplane.jpg"
import Footer from "../components/Footer/Footer";
import BackToUp from "@uiw/react-back-to-top";
import landingAircraft from "../assets/landing-airplane.jpg"

const AviationServices = () => {
  return (
    // <div className="font-bricolage">
    //   <div className="w-full h-[500px] md:h-[300px] relative">
    //     {/* img overlay */}
    //     <div className="bg-[#333] absolute top-0 h-full w-full z-10 opacity-70"></div>
    //     <img
    //       src={aeroplaneImg}
    //       alt="construction-image"
    //       className="absolute top-0 object-cover w-full h-[inherit]"
    //     />
    //     <div className="relative flex items-center justify-center w-full h-full z-40">
    //       <h1 className="uppercase text-center text-white text-[2rem] md:text-[3rem] font-semibold">
    //         {" "}
    //         <TypeWriterEffect
    //           textStyle={{
    //             fontFamily: "",
    //             color: "white",
    //             fontWeight: 700,
    //             display: "block",
    //           }}
    //           startDelay={2000}
    //           cursorColor="white"
    //           multiText={["aviation services"]}
    //           multiTextDelay={2000}
    //           typeSpeed={60}
    //         />
    //       </h1>
    //     </div>
    //   </div>

    //   {/* who are we */}
    //   <div className="flex items-center justify-center w-full my-10">
    //     <h4 className="text-5xl uppercase font-bold text-[#6E613E]">
    //       Who are we?
    //     </h4>
    //   </div>
    //   <div className="max-w-[1100px] w-full mx-auto my-5">
    //     <div className="grid grid-cols-4 ">
    //       <div className="col-span-4 md:col-span-2 w-full h-[300px]">
    //         <img
    //           src={airwings}
    //           alt="aeroplane wings"
    //           className="w-full object-cover h-full"
    //         />
    //       </div>
    //       <div className="col-span-4 md:col-span-2 p-4 flex items-center justify-center md:order-2 order-first">
    //         <p className="font-semibold">
    //           Western Pacific Aviation Services Limited emerges as a fresh
    //           aviation enterprise dedicated to nurturing aviation ventures and
    //           leveraging prospects within the aviation sector in Nigeria and the
    //           broader African region. The company was founded by a seasoned
    //           aviation specialist with an extensive background of over 25 years
    //           in the aviation field. This expertise spans from offering
    //           financial and technical consultancy services to industry
    //           participants as part of the Sprinfountain team, to overseeing the
    //           operations of a Nigeria-based airline
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-4 ">
    //       <div className="col-span-4 md:col-span-2 p-4 flex items-center justify-center">
    //         <p className="font-semibold">
    //           Utilizing practical experience acquired both domestically and
    //           internationally, our skilled team possesses a demonstrated
    //           capacity to formulate strategic resolutions that foster expansion,
    //           enhance financial well-being, and fortify operational efficiency.
    //           Western Pacific Solution Avaition Services has delivered advisory
    //           provisions to famous companies.
    //         </p>
    //       </div>
    //       <div className="col-span-4 md:col-span-2 w-full h-[300px]">
    //         <img
    //           src={airengine}
    //           alt="aeroplane wings"
    //           className="w-full object-cover h-full"
    //         />
    //       </div>
    //     </div>

    //     {/* who are we */}
    //     <div className="flex items-center justify-center w-full my-10">
    //       <h4 className="text-5xl uppercase font-bold text-[#6E613E] text-center">
    //         What we offer you.
    //       </h4>
    //     </div>

    //     <div className="grid grid-cols-6 w-full h-full">
    //       <div className="col-span-6 md:col-span-2 flex items-center justify-center w-full h-[300px]">
    //         <p className="w-[200px] text-xl text-center">
    //           <h1 className="pb-2 text-4xl font-semibold ">Travel & Tourism</h1>
    //           <p>General Sales Agent Services & Travel Agency Services .</p>
    //         </p>
    //       </div>
    //       <div className="col-span-6 md:col-span-2 md:border-l-2 border-r-2 md:border-[#6e613e]  flex items-center justify-center w-full h-[300px]">
    //         <p className="w-[200px] text-xl text-center">
    //           <h1  className="pb-2 text-4xl font-semibold ">Airlines</h1>
    //           <p>
    //             {" "}
    //             Airline Business process improvement and optimisation services &
    //             Airline Development Services{" "}
    //           </p>
    //         </p>
    //       </div>
    //       <div className="col-span-6 md:col-span-2 flex items-center justify-center w-full h-[300px]">
    //         <p className="w-[200px] text-xl text-center">
    //           {" "}
    //           <h1  className="pb-2 text-4xl font-semibold ">Aircraft & Airports</h1>
    //           <p>Aviation Capital Services </p>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    //   <BackToUp>
    //     <ion-icon name="arrow-up-outline"></ion-icon>
    //     </BackToUp>
    // </div>

    <div className="w-full h-full">
      <div className="w-full h-full md:h-[600px]">
        <img
          src={landingAircraft}
          className="object-cover h-full w-full"
          alt="landing-aircraft" id="image-div"
        />
        <div className="border-black" id="text-before">
          <div className="md:absolute bottom-0 md:pl-36 px-6 py-4 ">
          <h1 className="font-semibold text-gray-600 text-3xl md:text-5xl uppercase md:leading-[60px]">
            Experience a touch of professionalism <br /> from our
            <span className="font-bold text-black"> Aviation Services</span>
          </h1>
          </div>

          <div className="grid grid-cols-4 gap-2 py-12 md:px-40 px-5 text-gray-600 text-md md:text-xl">
            <div className="col-span-4 md:col-span-2 flex items-center justify-center">
            <p className="">
            Western Pacific Aviation Services Limited is a fresh and
            forward-looking aviation company dedicated to advancing aviation
            opportunities in Nigeria and Africa. Founded by a seasoned aviation
            specialist, we provide financial and technical consultancy services
            and manage airline operations, driving innovation and excellence in
            the industry. Our focus is on safety, sustainability, and service
            excellence, making a positive impact on aviation in the region.
          </p>
            </div>
            <div className="col-span-4 md:col-span-2  flex items-center justify-center">
            <img
              src={airwings}
              alt="aeroplane wings"
              className="w-full object-cover h-[300px]"
            />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="uppercase font-bold text-2xl md:text-4xl">What we will offer you</h1>

          <div className="flex md:flex-row flex-col items-center justify-between w-full md:max-w-[1100px]  md:mx-auto md:gap-4 px-10">
        <div className="md:w-[400px] md:h-[350px]">
          <div className="flex flex-col">
            {/* header */}
            <h1 className="text-[red] text-[7rem] font-alumni tracking-wider">
              01
            </h1>

            {/* mini heading */}
            <h4 className="capiitalize font-bold  font-poppins text-3xl">
              Travels <br/>and Tourism
            </h4>
            <p className="font-poppins py-5">
            Discover the world with our tailored travel and tour experiences. From captivating destinations to seamless itineraries, we offer unforgettable adventures, making your travel dreams a reality.
            </p>
          </div>
        </div>
        <div className="md:w-[400px] md:h-[350px]">
          {" "}
          <div className="flex flex-col">
            {/* header */}
            <h1 className="text-[red]  text-[7rem] font-alumni">
              02
            </h1>

            {/* mini heading */}
            <h4 className="capiitalize font-bold  font-poppins text-3xl">
              Aircraft <br/> and Airports
            </h4>
            <p className="font-poppins py-5">
            Experience excellence in aviation with our aircraft and airport services. We provide top-tier solutions, ensuring safe and efficient journeys for passengers and operators alike.
            </p>
          </div>
        </div>
        <div className="md:w-[400px]  md:h-[350px]">
          {" "}
          <div className="flex flex-col">
            {/* header */}
            <h1 className="text-[red] text-[7rem] font-alumni">
              03
            </h1>

            {/* mini heading */}
            <h4 className="capitalize font-bold  font-poppins text-3xl">
            aviation <br/> consultancy
            </h4>
            <p className="font-poppins py-5">
            Elevate your aviation endeavors with our consultancy services. Our experts offer tailored solutions, from regulatory compliance to safety enhancements and operational efficiency.
            </p>
          </div>
        </div>
      </div>

          </div>
          
      <BackToUp className="mr-14">
        <ion-icon name="arrow-up-outline"></ion-icon>

        
      </BackToUp>
        </div>
        <Footer/>
      </div>
      <div>
        </div>
    </div>
  );
};

export default AviationServices;

