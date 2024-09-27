import React from 'react'
import Button from '../../Button'
import {ImMail4 } from 'react-icons/im'
import {BsTelephoneForwardFill } from 'react-icons/bs'
import TextTransition, { presets } from 'react-text-transition';

const TopNav = () => {
const TEXTS = ['(+234)-815-236-3717', '(+234)-816-871-4744', '(+234)-8152-363-717'];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="hidden md:flex items-center justify-end bg-[#0B1B40] text-white py-5 text-sm font-bricolage font-semibold">
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-end gap-6">
      <h1 className="font-bricolage">

      </h1>
        <div className="flex items-center gap-1">
          <BsTelephoneForwardFill />
          <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
        </div>
        <div className="flex items-center lowercase gap-1">
          <ImMail4 />
          <a href="#">INFO@WESTERNPACIFICSOLUTIONSLIMITED.COM</a>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default TopNav
