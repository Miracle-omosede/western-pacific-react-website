import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { ClipLoader } from 'react-spinners';
import Navbar from './components/Navbar/Navbar'
import Construction from './pages/Construction';
import MarineService from './pages/MarineService';
import GeneralServices from './pages/GeneralServices';
import Contact from "./pages/Contact"
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import User from "./assets/favicon.png"
import Aviation from "./components/Aviation/Aviation";
import AviationServices from "./pages/AviationServices";
import SlickSlider from "./components/slick-slider/SlickSlider";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className='App'>
      { loading ? (
                <div id="app-loader">
                <ClipLoader color={"blue"} loading={loading} />
                <span className="text-blue-700 font-bricolage font-bold my-4">
                  Loading...
                </span>
              </div>
      ):(
          <div className="site">
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/construction' element={<Construction/>}/>
              <Route path='/marine' element={<MarineService/>}/>
              <Route path='/generalservice' element={<GeneralServices/>}/>
              <Route path='/aviation' element={<AviationServices/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/clients" element={<SlickSlider/>}/>
            </Routes>
            <div className="font-bricolage">
            <WhatsAppWidget
              className="font-bricolage"
              phoneNo="+2348086688557"
              position="right"
              widgetWidth="300px"
              widgetWidthMobile="260px"
              autoOpen={true}
              autoOpenTimer={5000}
              messageBox={true}
              messageBoxTxt="Hi, I need your services"
              iconSize="40"
              iconColor="white"
              iconBgColor="#25D366"
              headerIcon={User}
              headerIconColor="green"
              headerTxtColor="white"
              headerBgColor="	#25D366"
              headerTitle="Western Pacific Solutions"
              headerCaption="online"
              bodyBgColor="#bbb"
              chatPersonName="Support"
              chatMessage={
                <>
                  Hi there 👋 <br />
                  <br /> How can we help you?
                </>
              }
              footerBgColor="#999"
              placeholder="Type a message.."
              btnBgColor="yellow"
              btnTxt="Start Chat"
              btnTxtColor="black"
            />
          </div>
            </BrowserRouter>
          </div>
      )}
    </div>
  );
}

export default App;
