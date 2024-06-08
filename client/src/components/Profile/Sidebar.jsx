import logo from "../../assets/easypayZ-logo.webp";
import { RiDashboard2Line } from "react-icons/ri";
import { LuReceipt } from "react-icons/lu";
import { FaUsersLine } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";

import { Link } from "react-router-dom";
import { FaShareNodes } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

function Sidebar({ tabs, selected, setSelected, value }) {
  const icons = [
    <RiDashboard2Line fontSize={24} />,
    <LuReceipt fontSize={24} />,
    <FaUsersLine fontSize={24} />,
    <GrAnalytics fontSize={23} />,
    <FaShareNodes fontSize={24} />,
  ];

  return (
    <div className="relative bg-[#FFFFFF03] max-w-[250px] lg:w-[303px] text-[#FFFFFF66] shadow-sm text-md font-semibold hidden sm:block min-h-[100vh]">
      <div className="options text-start flex-col flex items-start mx-6 mt-8">
        {/* <h2>General</h2> */}
        {tabs?.map((tab) => (
          <Tab
            text={tab}
            tabs={tabs}
            icon={icons}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
        <h1 className="flex w-full items-center text-lg gap-3 mt-5 px-4 p-3 bg-[#2f324156] mx4 rounded-xl text-[#FFFFFF66] font-semibold">
          <FaUserCircle fontSize={30} />
          {value.uname}
        </h1>
      </div>
      <h2 className="absolute bottom-3 pt-3 text-sm font-normal text-[#FFFFFF66] border-t border-[#FFFFFF0D] w-full">
        &nbsp; &nbsp; Product version 1.0.0
      </h2>
    </div>
  );
}

const Tab = ({ text, selected, setSelected, icon, tabs }) => {
  return (
    <Link
      to={text == "Dashboard" ? `/dashboard` : `${text.toLowerCase()}`}
      onClick={() => setSelected(text)}
    >
      <button
        className={`${
          selected ? `bg-[#0C0D18] transition-all ` : ""
        } flex items-center gap-3 min-w-[200px] py-4 rounded-lg px-4 mt-3 hover:bg-[#2f324156] active:bg-[#2f324156]`}
      >
        {icon[tabs.indexOf(text)]}
        {text}
      </button>
    </Link>
  );
};

export default Sidebar;
