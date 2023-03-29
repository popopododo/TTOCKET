import { useNavigate } from "react-router";

function SponsorBehinForm() {
  const navigate = useNavigate();

  //뒤로가기
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="fixed top-0 h-16 flex content-center w-full items-center justify-between bg-white border-b-2 z-5 ">
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
        <p className="text-xl font-bold">비하인드</p>
        <p className="text-gray-400 text-base font-bold mr-7"></p>
      </div>
      <div className="h-60 bg-gray-200 flex flex-col justify-center items-center"></div>
    </div>
  );
}

export default SponsorBehinForm;
