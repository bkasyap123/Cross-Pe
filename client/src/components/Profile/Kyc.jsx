import React from "react";
import { Link } from "react-router-dom";
// import kycImg from "../../assets/image11.png";
import kycImg from "../../assets/Frame 16.png";
import kycImg2 from "../../assets/Group 4.png";
import kycImg3 from "../../assets/image11.png";
import { FaArrowRight } from "react-icons/fa6";

function Kyc({ value }) {
  return (
    <div className="relative h-screen max-sm:text-center mx-4 my-6 sm:mx-10 sm:my-5 max-md:flex-col fex justify-between sm:p8 rounded-xl">
      <div className="max-sm:my-16">
        <h2 className="text-4xl text-white">Welcome {value.uname}!</h2>
        <p className="text-[#FFFFFF66] text-lg my-3 font-normal max-sm:px-5">
          Here are your actions and dashboard! Should face any difficulties,
          email us at <em className="text-[#5A60FF]">help@crosspe.com</em>
        </p>
      </div>
      <div className="w-full border-[2.4px] border-[#FFFFFF0D] my-2 sm:my-8"></div>
      <img
        src={kycImg}
        alt="image"
        className="max-sm:h-[30px] mx-auto object-cover max-sm:hidden"
      />
      <img
        src={kycImg2}
        alt="image2"
        className="relative sm:bottom-[37px] bottom-[10px] mx-auto opacity-40 sm:max-w-[1030px] max-sm:hidden"
      />
      <div className="top-10 w-full mx-auto mt-10 sm:flex flex-col items-center sm:text-center">
        <img src={kycImg3} alt="imag3" className="size-20 inline-block" />
        <div>
          <h2 className="text-white font-bold">KYC Pending</h2>
          <p className="font-normal px-5 my-4 sm:my-2 sm:max-w-[400px]">
            Sorry, couldn’t use the platform without KYC. Get your KYC done and
            get started.
          </p>
        </div>
        <div className="flex flex-col justify-center text-white font-semibold">
          <button className="mx-20 mb-5 py-3 bg-[#FFFFFF0D] my-4 rounded-xl sm:px-5">
            Complete KYC →
          </button>
          <button className="mx-14 py-3 bg-[#343BFF] rounded-xl">
            Add Virtual Account +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kyc;
