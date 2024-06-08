import { AiOutlinePlayCircle } from "react-icons/ai";
import img from "../../assets/image.webp";

function Demo() {
  return (
    <div className="bg-[#343BFF] text-white sm:flex justify-evenly items-center py-16 relative max-sm:px-5">
      <div className="max-w-[450px]">
        <h2 className="text-5xl font-semibold">
          Do you rake trust and efficiency as paramount in finance?
        </h2>
        <p className="py-5">
          That's why we've built a product that prioritizes your needs.{" "}
        </p>
        <p className="text-md">
          Whether you’re a freelancer receiving international payments, a
          business expanding globally, or just someone who needs to convert
          currencies, we’ve got you covered.
        </p>
        <button className="bg-[#1C1C1C] py-4 px-5 rounded-xl mt-16 max-sm:mt-10">
          <span className="flex items-center gap-2 text-sm">
            Watch Demo <AiOutlinePlayCircle fontSize={18} />
          </span>
        </button>
      </div>
      <img
        src={img}
        alt="image"
        className="max-w-[600px] object-cover max-sm:w-[350px] max-sm:mt-12 max-sm:ml-[59px]"
      />
    </div>
  );
}

export default Demo;
