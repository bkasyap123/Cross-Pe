import React from "react";
import Kyc from "../Profile/Kyc";
import Account from "../Profile/Account";

function Dashboard({ value }) {
  return (
    <div>
      <Kyc />
      <Account />
    </div>
  );
}

export default Dashboard;
