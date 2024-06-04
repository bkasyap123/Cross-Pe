import React from "react";

function Subscribe() {
  return (
    <div className="bg-[#13162c] text-center px-3 py-6 sm:py-8 text-[#fff] rounded-xl mx-3 my-4 sm:mx-40">
      <h1 className="font-bold text-xl sm:text-[31px] my-2">
        Join the waitlist
      </h1>
      <h3 className="font-semibold sm:text-lg">
        Sign up now and get 20% discount on international payment fees
      </h3>
      <input
        type="email"
        placeholder="Enter Email"
        className="outline-none text-black my-4 sm:my-6 mr-2 rounded-lg px-3 py-2 sm:w-[45%] "
      />
      <button className="bg-blue-500 p-2 rounded-lg sm:px-6">Join</button>
    </div>
  );
}

export default Subscribe;
