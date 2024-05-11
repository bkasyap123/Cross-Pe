import Converter from "./Converter";
import bank from "../../assets/bank_vector.png";

function Feature() {
  return (
    <div className="sm:flex justify-evenly border my-[80px] py-6">
      <Converter />
      <img src={bank} alt="bank" className=" object-cover" />
    </div>
  );
}

export default Feature;
