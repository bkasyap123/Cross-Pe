import Converter from "../components/Converter.jsx";

function Hero() {
  return (
    <div className=" bg-green-400 sm:grid grid-cols-2 max-sm:text-start pt-10 pb-16 md:px-[150px]">
      <div className="mx-4 col-span-1 flex flex-col justify-center">
        <h2 className="font-bold mb-5 text-4xl">
          Save on fees <br />
          when sending <br />
          money abroad
        </h2>
        <p className="text-[18px]">
          Whether it’s 50 euros or 50,000 dollars, sending money shouldn't cost
          the earth. Wise lets you transfer money internationally, free from
          hidden fees. Try our calculator to see how much you can save versus
          high street banks.
        </p>
        <button className="bg-black text-green-400 mt-4 w-[200px] max-sm:w-[160px] px-6 py-2 text-[16px] font-semibold rounded-full">
          Learn more
        </button>
      </div>
      <Converter />
    </div>
  );
}

export default Hero;
