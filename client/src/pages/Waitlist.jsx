import React from "react";

const Waitlist = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center max-sm:m-3">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">You're in! 🎉</h1>
        <p className="text-gray-600 mb-6">
          Thanks for signing up! You're now on the exclusive waitlist for our
          upcoming launch.
        </p>
        <div className="bg-gray-200 rounded-lg p-4 mb-6">
          <p className="text-gray-800 font-bold">
            You're on the top spot!
            {/* Your spot: #{Math.floor(Math.random() * 500) + 1} */}
          </p>
        </div>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you the best experience possible. As a
          special thank you for being an early supporter, you'll be the first to
          know when we launch and receive an exclusive offer.
        </p>
        <div className="flex justify-center">
          <a
            href=" https://www.linkedin.com/share?id=0123456789"
            target="_blank"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Invite Friends
          </a>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
