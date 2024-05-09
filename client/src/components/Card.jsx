import Flag from "react-world-flags";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";

function Card({ flag }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        active ? `bg-green-400 opacity-90` : ""
      } px-4 py-6 my-6 rounded-xl border`}
    >
      <div className="flex gap-4">
        <Flag code={flag} width={45} height={50} className="rounded-md" />
        <span>
          <h1>United States Dollar</h1>
          <em className="text-sm text-green-700">USD</em>
        </span>
      </div>
      <h2 className="flex justify-between items-center mt-6">
        USD 0.00 <FaAngleRight fontSize={20} />
      </h2>
    </div>
  );
}

export default Card;
