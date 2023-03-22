import { Link } from "react-router-dom";
import axiosApi from "../../services/axiosApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface performDataType {
  desc: string;
  end_time: string;
  etc: string;
  id: number;
  location: string;
  max_seats: number;
  poster: string;
  price: number;
  start_time: string;
  title: string;
  user_id: string;
}

function PerformItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = "0x8cb70DaE0CB19C9a51c23F0C337B2e4223c29209";

  const [isLike, setIsLike] = useState<boolean>(false);
  const [performData, setPerformData] = useState<performDataType>();

  const handleGoBack = () => {
    navigate(-1);
  };

  const performDataHandler = async () => {
    try {
      const res = await axiosApi.get(
        `performance/${userId}/${location.state}`,
        {
          headers: {},
        }
      );
      console.log(res);
      setIsLike(res.data.body.is_user_like);
      setPerformData(res.data.body.performance_dto);
    } catch (err) {
      console.log(err);
    }
  };

  const isLikeHandler = async () => {
    try {
      const res = await axiosApi.put(
        `performance/like/${userId}/${location.state}`
      );
      setIsLike(res.data.body);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performDataHandler();
  }, []);

  return (
    <div className="flex flex-col content-center mt-20">
      <div className="flex h-14 items-center">
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
      {performData && (
        <div
          // className="bg-[url(http://ticketimage.interpark.com/Play/image/large/23/23003443_p.gif)] bg-no-repeat bg-local bg-cover flex justify-center"
          className={`bg-white bg-no-repeat bg-local bg-cover`}
        >
          <div className="w-full h-full backdrop-blur-sm  flex justify-center">
            <img src={performData.poster} alt="poster" className="h-80 "></img>
          </div>
        </div>
      )}
      <div className="">
        <p className="font-bold text-2xl my-2">{performData?.title}</p>
        <p className="flex justify-between ">
          <span className="text-right text-gray-500">
            {performData?.end_time.slice(0, 10)}
          </span>
          <span className="text-right text-gray-500">
            {performData?.location}
          </span>
        </p>
        <p>{performData?.desc}</p>
      </div>
      <div className="flex mt-10">
        {!isLike && (
          <p className="mr-4 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-gray-400"
              onClick={isLikeHandler}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </p>
        )}
        {isLike && (
          <p className="mr-4 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 text-ttokPink"
              onClick={isLikeHandler}
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </p>
        )}

        <Link to="/reserve/" state={location.state}>
          <button className="bg-[#FB7185] text-white w-72 h-10 rounded font-bold">
            예매하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PerformItem;
