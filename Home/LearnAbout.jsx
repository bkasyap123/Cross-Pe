import React from "react";
import purse from "../../assets/purse.webp";
import bitcoin from "../../assets/bitcoin.webp";
import crypto from "../../assets/crypto.webp";
import currency from "../../assets/currency.webp";

function LearnAbout() {
  return (
    <div className="w-full bg-[#13162c] h-full pt-36 pb-36 px-24 rounded-1xl overflow-hidden backdrop-blur-lg flex justify-center items-center">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 m-40%">
        <div className="w-full text-center text-white text-[60px] font-manrope font-bold leading-15 break-words">
          Learn About International banking
        </div>
        <div className="w-full flex justify-between items-start gap-6">
          <div className="w-[310px] pb-4 bg-gradient-to-b from-transparent to-transparent bg-opacity-[0.02] border-[1px] border-opacity-[0.05] rounded-xl flex flex-col justify-start items-start">
            <img
              className="w-full h-[195px] bg-gradient-to-b from-[#777777] to-[#777777] rounded-t-xl"
              src={purse}
              alt=""
            />
            <div className="w-full h-[172px] p-5 flex flex-col justify-start items-start gap-2.5">
              <div className="w-full flex flex-col justify-start items-start gap-3.25">
                <div className="w-full h-6 pr-40 flex justify-start items-start gap-2.5">
                  <div className="px-1.5 py-1 bg-opacity-[0.07] rounded overflow-hidden flex justify-center items-center gap-2.5">
                    <div className="text-[#B6B6B6] text-[12px] font-manrope font-semibold break-words">
                      TIPS & TRICKS
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-2.5">
                  <div className="flex-1 text-white text-[16px] font-manrope font-bold break-words">
                    How to setup crypto wallet in your account
                  </div>
                </div>
                <div className="w-full flex justify-start items-start gap-2.5">
                  <div className="flex-1 text-[rgba(255,255,255,0.40)] text-[14px] font-manrope font-normal break-words">
                    A crypto wallet is a place where you can securely keep your crypto..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[310px] pb-4 bg-gradient-to-b from-transparent to-transparent bg-opacity-[0.02] border-[1px] border-opacity-[0.05] rounded-xl flex flex-col justify-start items-start">
            <img
              className="w-full h-[195px] bg-gradient-to-b from-[#777777] to-[#777777] rounded-t-xl"
              src={bitcoin}
              alt=""
            />
            <div className="w-full h-[172px] p-5 flex flex-col justify-start items-start gap-2.5">
              <div className="w-full flex flex-col justify-start items-start gap-3.25">
                <div className="w-full h-6 pr-40 flex justify-start items-start gap-2.5">
                  <div className="px-1.5 py-1 bg-opacity-[0.07] rounded overflow-hidden flex justify-center items-center gap-2.5">
                    <div className="text-[#B6B6B6] text-[12px] font-manrope font-semibold break-words">
                      CRYPTO BASIC
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-2.5">
                  <div className="flex-1 text-white text-[16px] font-manrope font-bold break-words">
                    The fact about bitcoin must you know
                  </div>
                </div>
                <div className="w-full flex justify-start items-start gap-2.5">
                  <div className="flex-1 text-[rgba(255,255,255,0.40)] text-[14px] font-manrope font-normal break-words">
                    Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[310px] pb-4 bg-gradient-to-b from-transparent to-transparent bg-opacity-[0.02] border-[1px] border-opacity-[0.05] rounded-xl flex flex-col justify-start items-start">
            <img
              className="w-full h-[195px] bg-gradient-to-b from-[#777777] to-[#777777] rounded-t-xl"
              src={crypto}
              alt=""
            />
            <div className="w-full h-[172px] p-5 flex flex-col justify-start items-start gap-2.5">
              <div className="w-full flex flex-col justify-start items-start gap-3.25">
                <div className="w-full h-6 pr-40 flex justify-start items-start gap-2.5">
                  <div className="px-1.5 py-1 bg-opacity-[0.07] rounded overflow-hidden flex justify-center items-center gap-2.5">
                    <div className="text-[#B6B6B6] text-[12px] font-manrope font-semibold break-words">
                      TIPS & TRICKS
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-2.5">
                  <div className="flex-1 text-white text-[16px] font-manrope font-bold break-words">
                    When is the best time to invest in crypto?
                  </div>
                </div>
                <div className="w-full flex justify-start items-start gap-2.5">
                  <div className="flex-1 text-[rgba(255,255,255,0.40)] text-[14px] font-manrope font-normal break-words">
                    When prices are fluctuating, how do you know when to buy?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[310px] pb-4 bg-gradient-to-b from-transparent to-transparent bg-opacity-[0.02] border-[1px] border-opacity-[0.05] rounded-xl flex flex-col justify-start items-start">
            <img
              className="w-full h-[195px] bg-gradient-to-b from-[#777777] to-[#777777] rounded-t-xl"
              src={currency}
              alt=""
            />
            <div className="w-full h-[172px] p-5 flex flex-col justify-start items-start gap-2.5">
              <div className="w-full flex flex-col justify-start items-start gap-3.25">
                <div className="w-full h-6 pr-40 flex justify-start items-start gap-2.5">
                  <div className="px-1.5 py-1 bg-opacity-[0.07] rounded overflow-hidden flex justify-center items-center gap-2.5">
                    <div className="text-[#B6B6B6] text-[12px] font-manrope font-semibold break-words">
                      TIPS & TRICKS
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-2.5">
                  <div className="flex-1 text-white text-[16px] font-manrope font-bold break-words">
                    What Is DeFi? Inside the Wild West of Cryptocurrency.
                  </div>
                </div>
                <div className="w-full flex justify-start items-start gap-2.5">
                  <div className="flex-1 text-[rgba(255,255,255,0.40)] text-[14px] font-manrope font-normal break-words">
                    Welcome to decentralized finance or DeFi, the new frontier of crypto that will..
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-20.5">
          <div className="text-[#5A60FF] text-[16px] font-raleway font-semibold underline break-words">
            See All Articles
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnAbout;
