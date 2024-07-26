// import img from "../../assets/image12.webp";
// import img2 from "../../assets/image13.webp";
import exiteimage from "../../assets/image13.webp";
import liseningmusic from "../../assets/liseningmusic.webp";
import play from "../../assets/play.webp";
import usa from "../../assets/usa.webp";
import semicircle from "../../assets/semicircle.webp";
import rightarrow from "../../assets/rightarrow.webp";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-[#fff] z-50 sm:flex justify-around gap-4 items-center bg-[#12131c] w-full sm:pl-14 px-6 py-14">
      <div className="content w-3/4">
        <h2 className="font-bold text-[24px] sm:text-[30px]  lg:text-[50px] leading-tight">
          Seamless
          <p>
            payments, <b className="text-[#FF7C50]">Zero</b>
          </p>
          Fees
        </h2>
        <p className="my-2 text-sm sm:text-lg sm:w-[360px] max-sm:w-[300px]">
          Enjoy 0% transaction fees and no forex markup. Get multi currency
          accounts within minutes
        </p>
        <Link to="/register">
        <div style={{
          width: '50%',
          height: '100%',
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
          display: 'inline-flex'
        }}>
          <div style={{
            color: 'white',
            fontSize: 14,
            fontFamily: 'Manrope',
            fontWeight: '700',
            wordWrap: 'break-word'
          }}>
            Watch Demo
          </div>
          <div style={{
            width: 24,
            height: 24,
            position: 'relative'
          }}>
            <img src={play} alt="play" style={{
              width: 26,
              height: 26,
              position: 'absolute',
              left: 4,
              top: 1
            }} />
          </div>
        </div>

        </Link>
      </div>
      <div className="icon relative">
  <div className="relative w-full h-full">
    <div className=" overflow-hidden">
      <img
        src={semicircle}
        alt="semicircle"
        className="absolute top-[5%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-10"
      />
      <img
        src={exiteimage}
        className="sm:w-[350px] lg:w-[500px] relative z-20"
        alt="globalIcon"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="absolute inset-y-0 right-0 w-[75%] bg-[#ff714b] opacity-80 rounded-[100px] z-0" /> {/* Orange background */}
    </div>
    <div className="absolute top-[10%] left-0 w-full h-full z-30">
      <div className="absolute top-[109px] left-[18.22px] w-[240.49px] h-6 bg-gradient-to-t from-white to-transparent opacity-20 rounded-t-lg" />
      <div className="absolute top-0 left-0 w-[266px] h-[129px] bg-white bg-opacity-10 rounded-lg border border-opacity-12 backdrop-blur-[40px] overflow-hidden">
        <div className="absolute left-[68px] top-[95px] text-white text-sm font-manrope font-medium break-words">
          USD 42,881.22
        </div>
        <div className="absolute top-3 left-3 flex justify-between items-start w-[242.36px]">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 pt-2.5 pb-2.3">
              <img src={usa} alt="usa" className="w-10 h-5" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-white text-sm font-manrope font-bold break-words">
                United States<br />Dollar
              </div>
              <div className="text-[#5A60FF] text-sm font-manrope font-bold break-words">
                USD
              </div>
            </div>
          </div>
          <div className="relative w-6 h-6">
            <img
              src={rightarrow}
              alt="rightarrow"
              className="absolute inset-0 w-[17.33px] h-[17px] left-1 top-1.5"
            />
          </div>
        </div>
      </div>
    </div>
    <img
      src={liseningmusic}
      alt="listeningmusic"
      className="absolute top-[86%] left-[10%] w-2/5 h-3/10 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-20"
    />
  </div>
</div>

    </div>
  );
}

export default Hero;
