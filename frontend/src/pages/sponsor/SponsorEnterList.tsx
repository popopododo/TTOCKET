import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import axiosApi from "../../services/axiosApi";

import HeaderNav from "../../components/HeaderNav";
import { useCallback, useEffect, useState } from "react";

interface dataType {
  description: string;
  endTime: string;
  etc: string;
  id: number;
  location: string;
  max_seats: number;
  poster: string;
  price: number;
  startTime: string;
  title: string;
}

function SponsorEnterList() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const id = useSelector((state: RootState) => state.persistedReducer.user.id);
  const [userPerformList, setUserPerformList] = useState<dataType[]>([]);

  const getPerformListHandler = useCallback(async () => {
    try {
      const res = await axiosApi.get(`supervisor/list/${id}`);
      setUserPerformList(res.data.body.user_created_list);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    getPerformListHandler();
  }, [id, getPerformListHandler]);

  return (
    <div>
      <HeaderNav />
      <div className="overflow-y-auto mb-20 mt-2">
        <div className="h-10 flex items-center justify-between mb-10">
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
        <div className="flex flex-col justify-center items-center">
          {userPerformList &&
            userPerformList.map((el, idx) => (
              <div
                key={idx}
                className="flex w-full p-5 border-solid border-t-2 border-b-2 border-gray-300"
              >
                <img
                  src={`https://ipfs.io/ipfs/${el.poster}`}
                  alt="포스터"
                  className="h-28 mr-5"
                />
                <div>
                  <p className="font-bold text-lg w-56">{el.title}</p>
                  <p>위치 : {el.location}</p>
                  <p>좌석수 : {el.max_seats}</p>
                  <p>가격 : {el.price}</p>
                </div>
                <div className="self-center">
                  <Link to="/sponsor/behindlist" state={el.id}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-400 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SponsorEnterList;
