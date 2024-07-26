import img1 from "../../assets/image-1.webp";
import img2 from "../../assets/image-2.webp";
import img3 from "../../assets/image-3.webp";
import img4 from "../../assets/image-4.webp";
import play from "../../assets/play.webp";
import blackbackarrow from "../../assets/blackbackarrow.webp";
import manphone from "../../assets/manphone.webp";


function Benifit() {
  let process = [
    [
      "Fast Transactions",
      "Quick and easy currency conversions, available 24/7",
      img1,
    ],
    [
      "Secure Payments",
      "Your security is our priority. Bank-level encryption and security measures.",
      img2,
    ],
    [
      "Multi-Currency Support",
      "Convert and manage 30+ currencies effortlessly.",
      img3,
    ],
    [
      "One Tap Credits",
      "Send your remittance now, pay later once your client settles up. ",
      img4,
    ],
  ];

  return (
    <div className="mx-auto w-full bg-[#fff] text-center p-10 max-sm:py-8 max-sm:px-3">
      <div className="mx-auto p-3">
        <h2 className="text-5xl font-bold max-sm:text-xl mb-16 max-sm:mb-12">
          Power that <b className="text-[#FF7C50]">Crosspe</b> possess
        </h2>
        <div className="sm:flex gap-3 w-full ">
          {process.map((item, index) => (
            <div key={index} className="mb-3">
              <h1 className="font-bold text-start">{item[0]}</h1>
              <p className="text-start text-[15px] my-2 sm:max-w-[300px]">
                {item[1]}
              </p>
              <img
                src={item[2]}
                alt={`Image ${index}`}
                className="lg:size-[350px] rounded-xl sm:size-[200px] max-sm:size-[100px]  object-cover"
              />
            </div>
          ))}
        </div>
        <div className="sm:flex">
        <img
        src={manphone}
        alt="image"
        className="w-[442px] h-[295px] max-sm:hidden sm:rounded-l-3xl object-cover"
      />

          <div className="bg-[#EBEDF4] max-sm:mt-8 w-full sm:rounded-r-3xl text-start max-sm:rounded-xl max-sm:p-3">
            <h2 className="relative font-bold text-2xl top-[35%] sm:ml-10">
              On top of it
            </h2>
            <h2 className="relative font-bold text-xl top-[35%] sm:ml-10">
              Enjoy <b className="text-[#FF7C50]">Zero</b> transaction & forex
              fee
            </h2>
            <p className="relative text-[#1C1C1C] mt-3 top-[35%] text-start sm:ml-10 max-w-[500px]">
              Pay zero bucks apart from your transaction and enjoy the
              transparency the services caters to.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full">
  <div
    style={{
      width: '20%',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 16,
      paddingBottom: 16,
      background: 'rgba(28.26, 28.26, 28.26, 0.04)',
      borderRadius: '1rem', // equivalent to rounded-xl
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      display: 'inline-flex',
      marginTop: '2.5rem', // default margin-top for mt-10
    }}
    className="max-sm:mt-6" // only this class needs to be applied as an actual Tailwind class for small screens
  >
    <div
      style={{
        color: '#1C1C1C',
        fontSize: 14,
        fontFamily: 'Manrope',
        fontWeight: '700',
        wordWrap: 'break-word',
      }}
    >
      Signup
    </div>
    <div style={{ width: 24, height: 24, position: 'relative' }}>
      <img
        src={blackbackarrow}
        style={{ width: 14, height: 14, left: 5, top: 5, position: 'absolute' }}
        alt="signup"
      />
    </div>
  </div>
  <div
    style={{
      width: '15%',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 16,
      paddingBottom: 16,
      background: '#343BFF',
      borderRadius: 12,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      display: 'inline-flex',
      marginTop: '2.5rem', // default margin-top for mt-10
    }}
    className="max-sm:mt-6" // only this class needs to be applied as an actual Tailwind class for small screens
  >
    <div
      style={{
        color: 'white',
        fontSize: 14,
        fontFamily: 'Manrope',
        fontWeight: '700',
        wordWrap: 'break-word',
      }}
    >
      Watch Demo
    </div>
    <div style={{ width: 24, height: 24, position: 'relative' }}>
      <img
        src={play}
        alt="play"
        style={{
          width: 26,
          height: 26,
          position: 'absolute',
          left: 4,
          top: 1,
        }}
      />
    </div>
  </div>
</div>
 
      
      </div>
    </div>
  );
}

export default Benifit;
