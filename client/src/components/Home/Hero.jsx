// import icon from "../../assets/globe.png";
// import icon from "../../assets/bank_vector.png";
import icon from "../../assets/global.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white z-50 sm:flex justify-around gap-4 items-center  bg-black w-full sm:px-14 px-6 py-14">
      <div className="content">
        <h2 className="font-bold text-[24px] sm:text-[30px]  lg:text-[50px] leading-tight">
          Business banking for the
          <p className="text-blue-500 shadow-sm">CROSS-BORDER</p>
          SMBs and Startups
        </h2>
        <p className="my-2 text-sm sm:text-lg sm:w-[360px] max-sm:w-[300px]">
          View all global bank accounts and make cross-border payments, all in
          one dashboard.
        </p>
        <Link to="/register">
          <button className="bg-blue-600 px-6 font-semibold my-3 py-2 rounded-full">
            Get Started
          </button>
        </Link>
      </div>
      <div className="icon ">
        <img
          src={icon}
          className=" sm:w-[350px] lg:w-[540px]"
          alt="globalIcon"
        />
      </div>
    </div>
  );
}

export default Hero;
