import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import HeaderNav from "../../components/HeaderNav";

function SponsorPerformList() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <HeaderNav />
      <div className="overflow-y-auto mb-20">
        <div className="h-10 flex items-center justify-between">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
              onClick={handleGoBack}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </p>
          <p className="text-lg font-bold ml-6">나의 공연 목록</p>
          <Link to="add" className="text-gray-400 font-bold mr-3">
            등록
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SponsorPerformList;
