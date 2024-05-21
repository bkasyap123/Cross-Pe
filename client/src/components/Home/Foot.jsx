import logo from "../../assets/easypayZ-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function Foot() {
  const number = import.meta.env.VITE_NUMBER;

  const handleCall = () => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      <section className="bg-black mt-10 pt-8 pb-8 px-4 text-white grid sm:grid-cols-4 items-center">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] my-2 sm:pl-5 col-span-2"
        />
        <div className="mt-2 col-span-1 max-sm:col-span-3">
          <h2 className="font-bold text-lg my-4">Contact</h2>
          <ul className="text-sm text-opacity-90 leading-8">
            <li className="flex items-center gap-2">
              <Link to="https://www.linkedin.com/company/easypayz/?viewAsMember=true">
                <FaLinkedin /> Linkedin
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMail />
              Email
            </li>
            <li onClick={handleCall} className="flex items-center gap-2">
              <IoCallOutline /> Talk to Founder
            </li>
          </ul>
        </div>
        <div className="col-span-1 max-sm:col-span-3">
          <h2 className="font-bold text-lg my-4">Policies</h2>
          <ul className="text-sm text-opacity-90 leading-8">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund policy</li>
          </ul>
        </div>
      </section>
      <p className="text-sm text-center py-2 shadow-lg text-white bg-black w-full">
        &copy; <em className="font-normal ">EasyPayZ</em>&nbsp;
        {new Date().getFullYear()}
      </p>
    </>
  );
}

export default Foot;
