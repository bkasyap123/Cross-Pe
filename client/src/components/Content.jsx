import { Link } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";

function Content() {
  return (
    <>
      <p className="font-semibold text-center mt-6 lg:mt-14">
        <span className="text-green-500 text-4xl md:text-5xl font-bold">
          BUSINESS BANKING
        </span>
        <br />
        <span className="px-2 text-center font-bold">
          FOR CROSS-BORDER SMBs AND STARTUPS
        </span>
      </p>
      <p className="text-[18px] mt-6 px-2 leading-normal text-[#9b9b9b] text-center sm:mx-[200px] lg:mx-[400px]">
        View all global bank accounts, invest idle cash into high-yield
        government securities, and make cross-border payments - all in one
        dashboard.
      </p>
      <div className="flex gap-4 items-center justify-center my-6 max-sm:flex-wrap text-center">
        <Link
          to="/register"
          className="px-6 py-2 max-sm:w-full max-sm:mx-4 text-[16px] border-black border-2 font-semibold rounded-full"
        >
          <button>For Business</button>
        </Link>
        <Link
          to="/register"
          className="bg-green-400 max-sm:w-full max-sm:mx-4 px-6 py-2 text-[16px] text-black font-semibold rounded-full"
        >
          <button>For Individuals</button>
        </Link>
      </div>
    </>
  );
}

export default Content;

{
  /* <div className="flex gap-4 items-center justify-center my-6 max-sm:flex-wrap">
<Link to="/register">
  <button className="px-6 py-2 max-sm:w-full max-sm:mx-4 text-[16px] border-black border-2 font-semibold rounded-full">
    For Business
  </button>
</Link>
<Link to="/register" className="">
  <button className="bg-green-500 max-sm:w-full max-sm:mx-4 px-6 py-2 text-[16px] text-black font-semibold rounded-full">
    For Individuals
  </button>
</Link>
</div> */
}
