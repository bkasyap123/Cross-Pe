import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
// import useAuth from "../authStore/zustAuth.jsx";
import Logout from "./Logout.jsx";

function Nav() {
  const [expand, setExpand] = useState(false);
  // const { isLoggedIn } = useAuth();
  // const userExist = localStorage.getItem("tkn");

  const handleNav = () => {
    setExpand(!expand);
    // const userExist = localStorage.getItem("token");
    // console.log(userExist);
  };

  return (
    <div
      className={`${
        expand ? `pb-[80px] transition-all ease-out` : ""
      } flex justify-between items-center p-4 lg:px-10 lg:py-6 border-b border-slate-200`}
    >
      <h2 className="logo">EasyPayZ</h2>
      <div
        className={`${
          expand
            ? `flex relative top-14 right-8 gap-3 items-center`
            : `max-lg:hidden`
        }`}
      >
        {userExist ? (
          <Logout />
        ) : (
          <>
            <Link to="/login">
              <button className="px-4 lg:px-8 py-2 m-1 text-[16px] border-black border-2 font-semibold rounded-full">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="border-green-400 lg:px-8 border-2 px-4 py-2 m-1 text-[16px] text-green-400 font-semibold rounded-full">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
      <MdOutlineMenu onClick={handleNav} fontSize={25} className="lg:hidden" />
    </div>
  );
}

export default Nav;
