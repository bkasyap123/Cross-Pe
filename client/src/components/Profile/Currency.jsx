import Flag from "react-world-flags";
import "../../App.css";

export default function Currency({ value }) {
  return (
    <div className="flex justify-between items-center mb-6 w-full">
      <div className="flex items-center gap-5">
        <Flag code={value.flag} width={34} />
        <h2 className="text-sm">{value.name}</h2>
      </div>
      <div>
        <input type="checkbox" className="size-5" />
      </div>
    </div>
  );
}
