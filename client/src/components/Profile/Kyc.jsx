import React from "react";
import { Link } from "react-router-dom";
import kycImg from "../../assets/image11.png";
import { FaArrowRight } from "react-icons/fa6";

function Kyc({ value }) {
  return (
    <div className="relative max-sm:text-center mx-4 my-6 sm:mx-10 sm:my-5 max-md:flex-col fex justify-between sm:p-8 rounded-xl">
      <div>
        <h2 className="text-4xl text-white">Welcome {value.uname}!</h2>
        <p className="text-[#FFFFFF66] text-lg my-3 font-normal">
          Here are your actions and dashboard! Should face any difficulties,
          email us at <em className="text-[#5A60FF]">help@crosspe.com</em>
        </p>
      </div>
      <div className="w-full border-[2.4px] border-[#FFFFFF0D] my-8"></div>
      <div className="flex items-center justify-between p-4 rounded-xl bg-[#FF7C5012] z-50 relative">
        <div className="flex items-center">
          <img src={kycImg} alt="kycImage" className="size-20 object-cover" />
          <div>
            <h3 className="text-[#FF6F5C] font-bold">KYC Pending</h3>
            <p className="text-sm text-[#FFFFFF66]">
              Please complete your KYC to start accpeting payments
            </p>
          </div>
        </div>
        <FaArrowRight fontSize={25} fill="white" />
      </div>
      {/* <div className="bg-[#FF8A00] w-full max-w-[1052px] mx-auto h-[92px] opacity-20 z-10 backdrop-blur-3xl rounded-xl relative bottom-20"></div> */}
    </div>
  );
}

export default Kyc;
{
  /* <div className="flex items-center justify-between p-4 rounded-xl bg-[#FF7C5012] z-50 relative">
<div className="flex items-center">
  <img src={kycImg} alt="kycImage" className="size-20 object-cover" />
  <div>
    <h3 className="text-[#FF6F5C] font-bold">KYC Pending</h3>
    <p className="text-sm text-[#FFFFFF66]">
      Please complete your KYC to start accpeting payments
    </p>
  </div>
</div>
<FaArrowRight fontSize={25} fill="white" />
</div> */
}
