import React from 'react';
import './hero.css';
import heroImage from '../../assets/aerial-view.jpg';
import logo from '../../assets/favicon.png'
import TypeWriterEffect from 'react-typewriter-effect';
import TextTransition, { presets } from 'react-text-transition';
import Aos from "aos";
import "aos/dist/aos.css";


const Hero = () => {
  const TEXTS = ['Tranquility', 'Exellence', 'innovation'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="w-full">
      <div className="w-full h-[500px] relative">
        {/* <img
          src={heroImage}
          alt="hero-bg"
          className="h-[500px] w-full object-cover"
        /> */}
        <div className="hero-overlay">
          <div className="flex flex-col md:flex-row h-full md:justify-start justify-center items-center md:items-end gap-3 md:pl-[13rem] md:pb-[13rem] relative">
            <div className='flex items-center justify-center'>
              <img src={logo} alt="logo-img" className="md:w-[90px] w-[40px] h-auto flex md:items-center md:justify-center justify-start items-start"/>
            </div>
            <div className='flex flex-col md:items-start items-center justify-center md:pl-10'>
            <div className="relative">
              <h1
                className="flex capitalize font-opensans font-bold  text-white text-[20px] text-center md:text-[3rem]"
              >
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "'Bricolage Grotesque', 'sans-serif'",
                      color: "white",
                      fontWeight: 700,
                      display: "",
                    }}
                    startDelay={2000}
                    cursorColor="white"
                    multiText={["Western Pacific Solutions Limited."]}
                    multiTextDelay={2000}
                    typeSpeed={70}
                  />
              </h1>
            
            </div>
            <div className='text-sm md:text-xl italic font-bricolage text-white md:pl-20 capitalize flex gap-2'>
              <h2 className=''>We offer an experience of pure</h2>
              <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero