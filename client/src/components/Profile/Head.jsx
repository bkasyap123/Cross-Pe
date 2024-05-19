import logo from "../../assets/easypayZ-logo.png";
import UserAction from "./Popper.jsx";

function Head() {
  return (
    <div className="w-full flex items-center justify-between px-3 md:px-6 py-3 shadow">
      <img src={logo} alt="logo" className="w-[150px]" />
      <UserAction />
    </div>
  );
}

export default Head;
