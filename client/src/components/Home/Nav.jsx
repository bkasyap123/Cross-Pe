import { useState } from "react";
import logo from "../../assets/easypayZ-logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context";
import { useContext } from "react";
import { useLogout } from "../../hooks/useLogout";
import UserAction from "./Popper";
import { BiSolidChevronDown } from "react-icons/bi";

function Nav() {
  const [active, setActive] = useState(false);
  const number = import.meta.env.VITE_NUMBER;
  const { isLoggedIn } = useContext(AuthContext);
  const logout = useLogout();

  const handleClick = () => {
    setActive(!active);
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
        }     w-full h-[90px] flex bg-[#12131c] text-[#fff] text-lg justify-between items-center px-12 max-md:px-4`}
      >
        <div className="logo text-xl">
          <img
            src={logo}
            alt="logo"
            className="w-[160px] object-cover max-md:w-[130px]"
          />
        </div>
        <div className="options max-lg:hidden flex gap-6 text-gray-300 shadow-md sm">
          <h2 className="flex items-center gap-2">
            Product <BiSolidChevronDown fontSize={22} />
          </h2>
          <h2 className="flex items-center gap-2">
            Use Cases <BiSolidChevronDown fontSize={22} />
          </h2>
          <h2>Contact</h2>
        </div>
        {isLoggedIn ? (
          <UserAction />
        ) : (
          <div className="action flex gap-6 max-md:hidden">
            <Link to="/login">
              <button className="px-6 py-3 rounded-xl bg-[#ffffff2f] hover:bg-[#ffffff3f] active:bg-[#ffffff3f]">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-6 py-3 rounded-xl bg-[#ffffff2f] hover:bg-[#ffffff3f] active:bg-[#ffffff3f]">
                Signup
              </button>
            </Link>
          </div>
        )}
        <IoMenu onClick={handleClick} fontSize={34} className=" md:hidden" />
      </nav>
      <div
        className={`${
          active
            ? `my-4 text-white z-10 bg-[#12131c] absolute top-20 py-4 flex flex-col w-full items-center`
            : `hidden`
        }`}
      >
        {isLoggedIn ? (
          <button
            onClick={() => logout()}
            className="font-mono py-2 border px-6 rounded-full mb-3 active:bg-white active:text-black"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="font-mono py-2 border px-6 rounded-full mb-3 active:bg-white active:text-black">
              Login
            </button>
          </Link>
        )}
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
