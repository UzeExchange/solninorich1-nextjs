"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="1YyAzVmP9xQ"
        onClose={() => setOpen(false)}
      />

      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
            <div className="arrowTwo"></div>
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                SOLNINO RICH
                <br /> The Rich Stylish Bunny on Internet
              </h1>
              <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center">
                Forget, Dog, Cat, Frog, Sloth and any other animal Meme
                you&apos;ve seen so far.
                <br /> If Want to see your SOL or ETH reach the MOON and really
                talk about LAMBOS,
                <br />
                join the Internet&apos;s most Stylish Rabbit &quot;SOLNINO
                RICH&quot; - $SRICH.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button
                  className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6"
                  href="https://dexscreener.com/base/0x09fb8d55930bd077d905e61e342dfceece6d50ff"
                  target="_blank"
                >
                  Buy Now!*
                </button>
                {/* <button
                  onClick={() => setOpen(true)}
                  className="bg-transparent flex justify-center items-center text-white"
                >
                  <Image
                    src={"/images/Banner/playbutton.svg"}
                    alt="button-image"
                    className="mr-3"
                    width={47}
                    height={47}
                  />
                  How it work
                </button> */}
              </div>
            </div>

            <div className="col-span-5 lg:-m-48">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <Image
                src="/images/Banner/Solnino01.png"
                alt="nothing"
                width={760}
                height={760}
              />
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
