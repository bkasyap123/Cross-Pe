// import React, { useState } from "react";
// import Currency from "./Currency.jsx";
// import Modal from "./Modal.jsx";

// function Account() {
//   const [modal, setModal] = useState(false);

//   let countries = [
//     { flag: "EU", name: "Euro" },
//     { flag: "GB", name: "Great Britain Pound" },
//     { flag: "USA", name: "United States Dollar" },
//     { flag: "CA", name: "Canadian Dollar" },
//   ];

//   return (
//     <div className="sm:mx-10 mx-4">
//       <h2 className="text-xl font-bold">Your Virtual Accounts</h2>
//       <h3 className="flex my-3">
//         Dashboard <p className="mx-1">•</p> <em>Accounts</em>
//       </h3>
//       <button className="bg-blue-500 px-4 py-2 rounded-md text-white mt-4 mb-8">
//         + Add Virtual Account
//       </button>
//       <div className="md:flex md:flex-wrap">
//         {countries.map((contry, idx) => (
//           <Currency key={idx} flag={contry} setModal={setModal} />
//         ))}
//       </div>
//       <Modal modal={modal} setModal={setModal} flag={countries} />
//     </div>
//   );
// }

// export default Account;
