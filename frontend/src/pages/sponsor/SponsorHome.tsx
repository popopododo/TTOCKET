import addP from "../../assets/addPerform.png";
import addB from "../../assets/addBehind.png";
import { Link } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";

function SponsorHome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderNav />
      <div className="mt-40 w-full text-center mb-20">
        <p className="text-2xl font-bold">관리자 메뉴</p>
      </div>
      <div className="flex">
        <Link to="performlist">
          <div className="h-48 w-32 bg-ttokLightPink mx-5 flex flex-col items-center">
            <div className="w-32 h-4 bg-[#FB7185]"></div>
            <img src={addP} alt="addPerform" className="mt-6 ml-4 w-24" />
            <p className="text-white font-bold text-lg">공연</p>
          </div>
        </Link>
        <Link to="behindlist">
          <div className="h-48 w-32 bg-ttokLightPink mx-5 flex flex-col items-center">
            <div className="w-32 h-4 bg-[#FB7185]"></div>
            <img src={addB} alt="addBehind" className="mt-5 ml-2 w-24" />
            <p className="text-white font-bold text-lg">비하인드</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SponsorHome;
