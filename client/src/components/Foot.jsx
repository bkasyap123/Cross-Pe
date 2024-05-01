import React from "react";

function Foot() {
  return (
    <>
      <p className="text-sm text-center py-1 mb-1">
        &copy; <em className="font-semibold">EasyPayZ</em>&nbsp;
        {new Date().getFullYear()}
      </p>
    </>
  );
}

export default Foot;
