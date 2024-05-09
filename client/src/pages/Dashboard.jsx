import React from "react";
import icon from "../assets/bank_vector.png";
import Card from "../components/Card";
import { FaRegUserCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div>
      <div className="w-full font-semibold py-1 text-md text-center bg-green-400">
        Please complete the KYC to start accepting payments. Click{" "}
        <em className="underline">here</em>
        &nbsp; to proceed
      </div>
      <nav className="flex text-[20px] items-center w-full py-2 my-2 justify-between md:px-8 px-4">
        <h2 className="logo">EasyPayZ</h2>
        <FaRegUserCircle fontSize={32} fill="green" />
      </nav>
      <div className="kycBox bg-green-100 md:flex justify-between items-center md:text-start md:px-6 text-center p-4 mx-4 rounded-2xl my-8">
        <div>
          <h2 className="font-bold text-lg md:text-xl">KYC Pending</h2>
          <p className="py-2">
            Please complete the KYC to start accepting payments.
          </p>
          <button className="bg-green-500 px-3 py-1 rounded-lg font-semibold text-white my-2">
            Let's get started
          </button>
        </div>
        <img className="md:w-[250px]" src={icon} alt="vectorImage" />
      </div>
      <div className="accounts border p-2 mx-2">
        <h2 className="font-bold text-lg opacity-95">Your Virtual Accounts</h2>
        <p>
          Dashboard • <em className="text-gray-400">Accounts</em>
        </p>
        <button className="bg-green-500 px-3 py-1 rounded-lg font-semibold text-white my-2">
          + Add Virutal Account
        </button>
        <div>
          <Card flag="GB" />
          <Card flag="US" />
          <Card flag="CA" />
          <Card flag="EU" />
        </div>
      </div>
      <div className="reciept"></div>
    </div>
  );
}

export default Dashboard;
