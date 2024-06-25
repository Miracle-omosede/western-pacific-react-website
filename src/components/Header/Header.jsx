import React from "react";
import "./Header.css";
import marine from "../../assets/marinesupportservices.jpg";
import engineering from "../../assets/constructionandremodelling.jpg";
import aviationImg from "../Aviation/turbine-airplane.jpg";
import EngineeringDesign from "../../assets/helment-drawing.jpg"
import generalEngr from "../../assets/generalengineering.webp"
import { Link } from 'react-router-dom';
// import seaImg from "../../assets/sea1.jpg"

const Header = () => {
  return (
    <div className="hd-container flex w-full item-center justify-center flex-col  relative">
      {/* */}

      {/* <div className="absolute top-0 left-0 w-full h-full ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4CB6D8"
            fill-opacity="1"
            d="M0,288L21.8,250.7C43.6,213,87,139,131,128C174.5,117,218,171,262,186.7C305.5,203,349,181,393,192C436.4,203,480,245,524,256C567.3,267,611,245,655,250.7C698.2,256,742,288,785,288C829.1,288,873,256,916,224C960,192,1004,160,1047,170.7C1090.9,181,1135,235,1178,229.3C1221.8,224,1265,160,1309,149.3C1352.7,139,1396,181,1418,202.7L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div> */}
      <div className="wrapper mt-16">
      {/* <div className="mt-52">
        <img src={seaImg} alt="landing-cover-image" className="relative"/>
        <div className="image-shadow"></div>
      </div>  */}
      <Link to="/marine">
      <div className="card-wrapper font-bricolage">
          <img src={marine} className="card-img-hd" alt="cheetah" />
          <div className="intro">
            <h1 className="heading">Marine Support Services</h1>
            <p className="desc text-xs pr-5 md:w-full w-3/4 md:text-sm">
              {" "}
              Your trusted partner for maritime solutions, committed to safety,
              efficiency, and reliability. Offering tailored services for the
              maritime industry. &nbsp;{" "}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/construction">
      <div className="card-wrapper">
          <img src={engineering} alt="cheetah" className="card-img-hd" />
          <div className="intro">
            <h1 className="text-[20px] heading">
              Construction and Remodelling Services
            </h1>
            <p className="desc text-xs  md:w-full w-3/4  pr-5 md:text-sm">
              {" "}
              Transforming your ideas into reality through expert services. Our
              blend of creativity and quality brings your vision to life with
              efficiency and precision.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/aviation">
      <div className="card-wrapper">
          <img src={aviationImg} alt="cheetah" className="card-img-hd" />
          <div className="intro">
            <h1 className="heading">Aviation Services</h1>
            <p className="desc text-xs  md:w-full w-3/4  pr-5 md:text-sm">
              {" "}
              Your dedicated source for exceptional aviation services. With a
              focus on innovation, precision, and excellence.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/aviation">
      <div className="card-wrapper">
          <img src={ EngineeringDesign } alt="cheetah" className="card-img-hd" />
          <div className="intro">
            <h1 className="heading">Engineering Services</h1>
            <p className="desc text-xs  md:w-full w-3/4  pr-5 md:text-sm">
              {" "}
              Your dedicated source for unique engineering services. With a
              focus on innovation, precision, and excellence.
            </p>
          </div>
        </div>
      </Link>
      <Link to="/generalservice">
      <div className="card-wrapper">
          <img src={generalEngr} alt="cheetah" className="card-img-hd" />
          <div className="intro">
            <h1 className="heading">General Services</h1>
            <p className="desc text-xs  md:w-full w-3/4  pr-5 md:text-sm">
              {" "}
              business advisory and consulting, general merchandise, as well as training and development.
            </p>
          </div>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Header;
