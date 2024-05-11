import { useState } from "react";
import logo from "../../assets/easypayZ-logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  const [active, setActive] = useState(false);
  const number = import.meta.env.VITE_NUMBER;

  const handleClick = () => {
    setActive(!active);
    // active ? console.log(active) : console.log(active);
  };

  const handleCall = () => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      <nav
        className={`${
          active
            ? `h-[200px] transition-all duration-500 ease-in-out  items-baseline pt-6`
            : `transition-all  duration-1000 ease-in-out`
        }     w-full h-[90px] flex bg-black text-white text-lg justify-between items-center px-12 max-md:px-4`}
      >
        <div className="logo text-xl">
          <img
            src={logo}
            alt="logo"
            className="w-[160px] object-cover max-md:w-[130px]"
          />
        </div>
        <div className="options max-lg:hidden flex gap-6 text-gray-300 shadow-md sm">
          <h2>Company</h2>
          <h2>Individual</h2>
          <h2>Contact</h2>
        </div>
        <div className="action flex gap-6 max-md:hidden">
          <Link to="/login">
            <button className="active:border px-6 py-2 rounded-full active:rounded-full active:text-blue-400 active:border-blue-500">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-2 rounded-full text-blue-400 border-2 border-blue-500">
              Register
            </button>
          </Link>
        </div>
        <IoMenu onClick={handleClick} fontSize={34} className=" md:hidden" />
      </nav>
      <div
        className={`${
          active
            ? `my-4 text-white z-10 bg-[#000000a5] absolute top-20 py-4 flex flex-col w-full items-center`
            : `hidden`
        }`}
      >
        <Link to="/register">
          <h2 className="font-mono">For Businesses</h2>
        </Link>
        <Link to="/register">
          <h2 className="py-2 font-mono">For Individual</h2>
        </Link>
        <button
          onClick={handleCall}
          className="bg-white px-6 py-2 mt-3 text-black rounded-full outline-none font-semibold"
        >
          Talk to Founder
        </button>
      </div>
    </>
  );
}

export default Nav;
