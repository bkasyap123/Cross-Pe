import React from "react";
import { Link } from "react-router-dom";
import kyc from "../../assets/kyc.png";

function Kyc() {
  return (
    <div className="bg-blue-100 relative max-sm:text-center border-red-400 mx-4 my-6 sm:mx-10 sm:my-10 max-md:flex-col flex justify-between sm:p-8 rounded-xl">
      <div className="m-3">
        <h1 className="font-bold text-xl">KYC Pending</h1>
        <p className="my-2 text-lg">
          Please complete the KYC to start accepting payments.
        </p>
        <Link to="/dashboard/profile">
          <button className="button bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold my-6">
            Complete KYC
          </button>
        </Link>
      </div>
      <img src={kyc} alt="kycImage" className="max-w-[290px] object-cover" />
    </div>
  );
}

export default Kyc;
