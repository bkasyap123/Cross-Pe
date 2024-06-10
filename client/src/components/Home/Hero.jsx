// import img from "../../assets/image12.webp";
// import img2 from "../../assets/image13.webp";
import icon from "../../assets/image.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-[#fff] z-50 sm:flex justify-around gap-4 items-center bg-[#12131c] w-full sm:pl-14 px-6 py-14">
      <div className="content">
        <h2 className="font-bold text-[24px] sm:text-[30px]  lg:text-[50px] leading-tight">
          Seamless
          <p>
            payments, <b className="text-[#FF7C50]">Zero</b>
          </p>
          Fees
        </h2>
        <p className="my-2 text-sm sm:text-lg sm:w-[360px] max-sm:w-[300px]">
          Enjoy 0% transaction fees and no forex markup. Get multi currency
          accounts within minutes
        </p>
        <Link to="/register">
          <button className="bg-[#343BFF] text-sm px-5 font-semibold mt-5 mb-8 py-3 rounded-xl">
            Get Started
          </button>
        </Link>
      </div>
      <div className="icon">
        <img
          src={icon}
          className=" sm:w-[350px] lg:w-[550px]"
          alt="globalIcon"
        />
      </div>
    </div>
  );
}

export default Hero;
