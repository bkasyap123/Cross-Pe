import Flag from "react-world-flags";
import { TbMathGreater } from "react-icons/tb";
import { useState } from "react";

function Currency({ flag }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`${
        active ? `bg-gradient-to-b from-blue-300 to-blue-400 text-white` : ``
      }  p-6 mx-3 rounded-lg my-4 lg:min-w-[270px] border shadow-sm`}
    >
      <div className="flex gap-4">
        <Flag code={flag.flag} width={34} />
        <span>
          <p className={`${active ? `text-semibold` : ``}`}>{flag.name}</p>
          <p className="text-[13px] text-blue-500">USD</p>
        </span>
      </div>

      <p className="flex justify-between items-center mt-5">
        USD 0.00 <TbMathGreater fontSize={20} />
      </p>
    </div>
  );
}

export default Currency;
