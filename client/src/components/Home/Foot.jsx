import logo from "../../assets/crosspelogo.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
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
      <section className="bg-[#13162c] w-full text-[#B6B6B6] sm:flex items-center justify-around gap-10 px-5 pt-10 pb-5 sm:py-16 sm:px-16">
        <div className=" max-sm:hidden flex flex-row ">
        <div className="flex flex-col">
        <div className="flex items-center mr-20 w-[140px] h-[50px] mt-10">
        <img src={logo} alt="logo" className="w-[100px] mb-2 mr-auto" />
        <h2 className="text-white text-[24px] font-manrope font-bold ml-[-12px] ">Crosspe</h2>
      </div>
          <span className="ml-5 mt-5">International Payments made<br/>
          Faster. Cheaper. Easier.</span>
          <span className="text-[15px] mt-7 ml-4">© 2024 Goswiftpe Technologies Pvt Ltd. All rights reserved</span>
        </div>
        <div className="w-50 ml-20 mt-10 mr-5">
        <h1 className=" text-[24px] text-white font-bold mb-5 ">Contact Us</h1>
        <span className="text-white mb-3"></span>
          <span className="mt-20 mb-30 text-white text-[12px]" >GOSWIFTPE TECHNOLOGIES PRIVATE LIMITED<br></br>
          P. NO 17, S/F KH NO 31/24, 17/14 & 25, New Delhi, <br></br>South West Delhi- 110045, Delhi</span>
          <br/>
          <br/>
          <span className="mt-20 text-white text-[12px]">CIN : U62011DL2024PTC433825 </span>
        </div>
        <div className="w-50  mr-5 mt-10 ml-40">
            <h1 className="text-[24px] text-white font-bold mb-5  mt--40">
              Legal
            </h1>
              <Link to="/terms&conditions">
              Terms and conditions
              
              </Link>
              <Link to="/privacy-policy">
              <p>
              Privacy Policy
              </p></Link>
              
          </div>

        </div>
       
        
      </section>
    
    </>
  );
}

export default Foot;

// import logo from "../../assets/easypayZ-logo.webp";
// import { FaLinkedin } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";
// // import { Link } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";

// function Foot() {
//   const number = import.meta.env.VITE_NUMBER;

//   const handleCall = () => {
//     window.location.href = `tel:${number}`;
//   };

//   let about = ["About", "Careers", "Blog", "Legal & Privacy"];
//   let product = ["Features", "Partners", "Affiliate", "Instituional Services"];
//   let learn = [
//     "What are Virtual Accounts?",
//     "International Transaction Basics",
//     "Tips and Tutorials",
//     "Market Update",
//   ];

//   return (
//     <>
//       <section className="bg-[#13162c] w-full min-h-[297px] text-[#B6B6B6] sm:flex items-center justify-around gap-10 px-5 pt-10 pb-5 sm:py-16 sm:px-16">
//         <div className=" max-sm:hidden flex flex-col items-center">
//           <img src={logo} alt="logo" className="w-[125px] mb-6" />
//           <div className="">
//             <span className="flex gap-3 mb-4">
//               <li className="list-none">
//                 <FaInstagram fontSize={19} />
//               </li>
//               <li className="list-none">
//                 <FaLinkedin fontSize={19} />
//               </li>
//               <li className="list-none">
//                 <MdOutlineMail fontSize={19} />
//               </li>
//               <li className="list-none">
//                 <IoCallOutline fontSize={19} onClick={handleCall} />
//               </li>
//             </span>
//             <span>&copy; {new Date().getFullYear()} Cross Pe.</span>
//           </div>
//         </div>
//         <div className="sm:grid grid-cols-3">
//           <ul className="my-8">
//             <h2 className="text-[#fff] font-bold text-md mb-2">About Us</h2>
//             {about.map((a) => (
//               <li className="py-2" key={a}>
//                 {a}
//               </li>
//             ))}
//           </ul>
//           <ul className="my-8">
//             <h2 className="text-[#fff] font-bold text-md mb-2">Product</h2>
//             {product.map((p) => (
//               <li className="py-2" key={p}>
//                 {p}
//               </li>
//             ))}
//           </ul>
//           <ul className="my-8">
//             <h2 className="text-[#fff] font-bold text-md mb-2">Learn</h2>
//             {learn.map((l) => (
//               <li className="py-2" key={l}>
//                 {l}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="grid grid-rows-2 sm:hidden text-center">
//           <img src={logo} alt="logo" className="w-[110px] mx-auto" />
//           <div>
//             <span className="flex gap-3 mb-4 justify-center items-center">
//               <li className="list-none">
//                 <FaInstagram fontSize={18} />
//               </li>
//               <li className="list-none">
//                 <FaLinkedin fontSize={18} />
//               </li>
//               <li className="list-none">
//                 <MdOutlineMail fontSize={18} />
//               </li>
//               <li className="list-none">
//                 <IoCallOutline fontSize={18} onClick={handleCall} />
//               </li>
//             </span>
//             <span>
//               &copy; {new Date().getFullYear()} Cross Pe. All rights reserved
//             </span>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Foot;
