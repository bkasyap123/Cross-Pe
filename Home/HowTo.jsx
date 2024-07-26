import React from "react";
import img1 from "../../assets/tick.webp";
import img2 from "../../assets/cpic.webp";
import img3 from "../../assets/image8.webp";
import img4 from "../../assets/image9.webp";
import img5 from "../../assets/image10.webp";
import { FaArrowRightLong } from "react-icons/fa6";

function HowTo() {
  let process = [
    [
      img3,
      "Create Your Account",
      "Your account and personal identity are guaranteed safe.",
    ],
    [
      img4,
      "Connect Virtual Accounts",
      "Connect the bank account to start transactions.",
    ],
    [
      img5,
      "Start Transacting",
      "Send or receive money through international visual accounts.",
    ],
  ];

  return (
    <div className="bg-[#13162c] sm:p-20 px-6 py-16 text-white flex flex-col items-center">
      <div className="sm:flex items-center">
        <div className="bg-[#0057FF17] flex flex-col max-w-[280px] max-sm:max-w-[490px] max-sm:py-10 p-5 rounded-2xl">
          <img src={img1} alt="image" className="w-[100px] mb-6" />
          <div>
            <h2 className="font-semibold text-lg">
              Protected Securely with transaparency
            </h2>
            <p className="mt-4 mb-6 text-[#B6B6B6] text-[16px] pr-4">
              All cash balances are covered by FDIC insurance, up to a maximum
              of $250,000.
            </p>
            <span className="flex items-center gap-2 text-[#5A60FF]">
              See Explained <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="bg-[#0057FF17] sm:ml-8 max-sm:mt-10 flex flex-col max-w-[280px] max-sm:py-10 max-sm:max-w-[490px] p-5 rounded-2xl">
          <img src={img2} alt="image" className="w-[100px] mb-6" />
          <div>
            <h2 className="font-semibold text-lg">
            Ensuring end-to-end encryption
            </h2>
            <p className="mt-4 mb-6 text-[#B6B6B6] text-[16px] pr-4">
            Reversed engineered the for end-to-end workflows.

            </p>
            <span className="flex items-center gap-2 text-[#5A60FF]">
              See Explained <FaArrowRightLong />
            </span>
          </div>
        </div>
        <div className="sm:ml-20 max-sm:mt-10">
          <h2 className="text-5xl">Dodging all the </h2>
          <h2 className="text-5xl my-2">possible</h2>
          <h2 className="text-5xl">loopholes</h2>
          <p className="text-[#FFFFFF66] mt-6 max-w-[400px] text-lg">
            Securing the transactions end-to-end and making the transaction more
            smooth
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="my-8 font-semibold sm:ml-8 text-2xl">
          How To Get Started
        </h2>
        <div className="flex max-sm:flex-col items-center">
          {process.map((p) => (
            <div
              key={p[1]}
              className="bg-[#FFFFFF05] max-sm:mb-8 text-sm border-[#FFFFFF0D] border sm:ml-8 rounded-2xl p-5 flex gap-8 items-center w-full"
            >
              <img src={p[0]} alt="image" className="size-20" />
              <div>
                <h3>{p[1]}</h3>
                <p className="text-[#FFFFFF66] mt-3">{p[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowTo;
