import React from "react";
import Currency from "./Currency.jsx";

function Account() {
  let contries = [
    { flag: "EU", name: "Euro" },
    { flag: "GB", name: "Great Britain Pound" },
    { flag: "USA", name: "United States Dollar" },
    { flag: "CA", name: "Canadian Dollar" },
  ];

  return (
    <div className="sm:mx-10 mx-4">
      <h2 className="text-xl font-bold">Your Virtual Accounts</h2>
      <h3 className="flex my-3">
        Dashbaord • <em>Accounts</em>
      </h3>
      <button className="bg-blue-500 px-4 py-2 rounded-md text-white mt-4 mb-8">
        + Add Virtual Account
      </button>
      <div className="md:flex md:flex-wrap">
        {contries.map((contry, idx) => (
          <Currency key={idx} flag={contry} />
        ))}
      </div>
    </div>
  );
}

export default Account;
