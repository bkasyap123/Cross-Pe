import logo from "../../assets/easypayZ-logo.png";
import { RiDashboard2Line } from "react-icons/ri";
import { LuReceipt } from "react-icons/lu";
import { FaUsersLine } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Sidebar({ value }) {
  return (
    <div className="border min-w-[300px] lg:w-[303px] text-black shadow-sm text-md font-semibold hidden sm:block min-h-[100vh]">
      <div className="logo pt-2">
        {/* <img src={logo} className="w-[175px] mx-4 mt-10 lg:mt-16" alt="logo" /> */}
        <h1 className="p-4 mt-8 bg-gray-200 mx-4 rounded-xl text-slate-700 font-semibold">
          {value.email}
        </h1>
      </div>
      <div className="options text-start flex-col flex items-start mx-6 mt-8">
        <h2>General</h2>
        <button className="flex gap-3 w-full py-3 rounded-lg px-4 mt-3 hover:bg-blue-100 active:bg-blue-100">
          <RiDashboard2Line fontSize={25} />
          Dashboard
        </button>
        <button className="flex gap-3 w-full py-3 rounded-lg px-4 my-3 hover:bg-blue-100 active:bg-blue-100">
          <LuReceipt fontSize={25} />
          Requests
        </button>
        <button className="flex gap-3 w-full py-3 rounded-lg px-4 hover:bg-blue-100 active:bg-blue-100">
          <FaUsersLine fontSize={25} />
          Clients
        </button>
        <button className="flex gap-3 w-full py-3 my-3 rounded-lg px-4 hover:bg-blue-100 active:bg-blue-100">
          <FaUser fontSize={25} />
          Profile
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
