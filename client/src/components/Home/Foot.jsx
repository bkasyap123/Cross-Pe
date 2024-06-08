import logo from "../../assets/easypayZ-logo.webp";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function Foot() {
  const number = import.meta.env.VITE_NUMBER;

  const handleCall = () => {
    window.location.href = `tel:${number}`;
  };

  let about = ["About", "Careers", "Blog", "Legal & Privacy"];
  let product = ["Features", "Partners", "Affiliate", "Instituional Services"];
  let learn = [
    "What are Virtual Accounts?",
    "International Transaction Basics",
    "Tips and Tutorials",
    "Market Update",
  ];

  return (
    <>
      <section className="bg-[#13162c] w-full min-h-[297px] text-[#B6B6B6] sm:flex items-center justify-around gap-10 px-5 pt-10 pb-5 sm:py-16 sm:px-16">
        <div className=" max-sm:hidden flex flex-col items-center">
          <img src={logo} alt="logo" className="w-[125px] mb-6" />
          <div className="">
            <span className="flex gap-3 mb-4">
              <li className="list-none">
                <FaInstagram fontSize={19} />
              </li>
              <li className="list-none">
                <FaLinkedin fontSize={19} />
              </li>
              <li className="list-none">
                <MdOutlineMail fontSize={19} />
              </li>
              <li className="list-none">
                <IoCallOutline fontSize={19} onClick={handleCall} />
              </li>
            </span>
            <span>&copy; {new Date().getFullYear()} Cross Pe.</span>
          </div>
        </div>
        <div className="sm:grid grid-cols-3">
          <ul className="my-8">
            <h2 className="text-[#fff] font-bold text-md mb-2">About Us</h2>
            {about.map((a) => (
              <li className="py-2" key={a}>
                {a}
              </li>
            ))}
          </ul>
          <ul className="my-8">
            <h2 className="text-[#fff] font-bold text-md mb-2">Product</h2>
            {product.map((p) => (
              <li className="py-2" key={p}>
                {p}
              </li>
            ))}
          </ul>
          <ul className="my-8">
            <h2 className="text-[#fff] font-bold text-md mb-2">Learn</h2>
            {learn.map((l) => (
              <li className="py-2" key={l}>
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-rows-2 sm:hidden text-center">
          <img src={logo} alt="logo" className="w-[110px] mx-auto" />
          <div>
            <span className="flex gap-3 mb-4 justify-center items-center">
              <li className="list-none">
                <FaInstagram fontSize={18} />
              </li>
              <li className="list-none">
                <FaLinkedin fontSize={18} />
              </li>
              <li className="list-none">
                <MdOutlineMail fontSize={18} />
              </li>
              <li className="list-none">
                <IoCallOutline fontSize={18} onClick={handleCall} />
              </li>
            </span>
            <span>
              &copy; {new Date().getFullYear()} Cross Pe. All rights reserved
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Foot;
