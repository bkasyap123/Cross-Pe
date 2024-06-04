import React from "react";
import img1 from "../../assets/image-1.png";
import img2 from "../../assets/image-2.png";
import img3 from "../../assets/image-3.png";
import img4 from "../../assets/image-4.png";
import img5 from "../../assets/image-5.png";
import { LuMoveRight } from "react-icons/lu";

function How() {
  let process = [
    [
      "Fast Transactions",
      "Quick and easy currency conversions, available 24/7",
      img1,
    ],
    [
      "Secure Payments",
      "Your security is our priority. Bank-level encryption and security measures.",
      img2,
    ],
    [
      "Multi-Currency Support",
      "Convert and manage 30+ currencies effortlessly.",
      img3,
    ],
    [
      "One Tap Credits",
      "Send your remittance now, pay later once your client settles up. ",
      img4,
    ],
  ];

  return (
    <div className="mx-auto w-full bg-[#fff] text-center p-10 max-sm:py-8 max-sm:px-3">
      <div className="mx-auto p-3">
        <h2 className="text-5xl font-bold max-sm:text-xl mb-16 max-sm:mb-12">
          <b className="text-[#FF7C50]">Power</b> the process
        </h2>
        <div className="sm:flex gap-3 w-full ">
          {process.map((item, index) => (
            <div key={index} className="mb-3">
              <h1 className="font-bold text-start">{item[0]}</h1>
              <p className="text-start text-[15px] my-2 sm:max-w-[300px]">
                {item[1]}
              </p>
              <img
                src={item[2]}
                alt={`Image ${index}`}
                className="lg:size-[350px] rounded-xl sm:size-[200px] max-sm:size-[100px]  object-cover"
              />
            </div>
          ))}
        </div>
        <div className="sm:flex">
          <img
            src={img5}
            alt="image"
            className="w-[442px] h-[295px] max-sm:hidden sm:rounded-l-3xl object-cover"
          />
          <div className="bg-[#EBEDF4] max-sm:mt-8 w-full sm:rounded-r-3xl text-start max-sm:rounded-xl max-sm:p-3">
            <h2 className="relative font-bold text-2xl top-[35%] sm:ml-10">
              On top of it
            </h2>
            <h2 className="relative font-bold text-xl top-[35%] sm:ml-10">
              Enjoy <b className="text-[#FF7C50]">Zero</b> transaction & forex
              fee
            </h2>
            <p className="relative text-[#1C1C1C] mt-3 top-[35%] text-start sm:ml-10 max-w-[500px]">
              Pay zero bucks apart from your transaction and enjoy the
              transparency the services caters to.
            </p>
          </div>
        </div>
        <button className="bg-[#343BFF] font-semibold text-[#fff] rounded-xl py-3 px-4 max-sm:mt-6 mt-10">
          <li className="list-none flex items-center gap-3">
            Learn more <LuMoveRight fontSize={25} />
          </li>
        </button>
      </div>
    </div>
  );
}

export default How;
