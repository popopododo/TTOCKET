
import { useNavigate } from "react-router-dom";
function BackNav(){
    const navigate = useNavigate();
    
      //뒤로가기 버튼
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="flex items-center h-14">
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
        <p onClick={handleGoBack}>돌아가기</p>
      </div>
    )
}

export default BackNav;