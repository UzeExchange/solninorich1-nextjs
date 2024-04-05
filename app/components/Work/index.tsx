"use client";
import Image from "next/image";

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: '1 - Press "BUY NOW"',
    subheading: "Connect Your Wallet",
    hiddenpara:
      "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "2 - Enter Ammount of SOL",
    subheading: "to Swap for $SRICH",
    hiddenpara:
      "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: '3 - Hit "BUY NOW" again',
    subheading: "and Approve Transaction",
    hiddenpara:
      "standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...",
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            How to Buy
          </h3>
          <h3 className="text-white text-xl font-medium mb-6">
            if some reason you can&apos;t connect your wallet, just Send SOL to:
          </h3>
          <p className="text-white md:text-xl font-bold leading-8 mb-6 cursor-pointer select-all">
            F1YxhAhRu6DquPECCZnG8Ry9o45XZvJFLcDRWfqNb2f5
          </p>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Buy before Launch!** <br /> Enjoy the best price before launch.
          </p>
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            1 SOL = 20000 $SRICH
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            &quot;**It will be Airdropped directly on your wallet one day before
            launch&quot;
          </p>
          <h3 className="text-white text-xl font-medium mb-9">
            NB: Don&apos;t use a CEX to send SOL, that address cannot be
            Airdropped! Use your own wallet.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {workdata.map((items, i) => (
            <div className="card-b p-8" key={i}>
              <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <Image
                  src={"/images/Work/bg-arrow.svg"}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>
              <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                {items.heading}
              </h3>
              <p className="text-base font-normal text-bluish text-center mt-2">
                {items.subheading}
              </p>
              <span className="text-base font-normal m-0 text-bluish text-center hides">
                {items.hiddenpara}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
