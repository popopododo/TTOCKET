import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface dummyType {
  id: number;
  name: string;
  img: string;
  start: number;
  lacation: string;
  coin: number;
}

const dummyData: dummyType[] = [
  {
    id: 1,
    name: "데스노트",
    img: "http://ticketimage.interpark.com/rz/image/play/goods/poster/23/23002291_p_s.jpg",
    start: 1,
    lacation: "잠실 종합운동장",
    coin: 3.5,
  },
  {
    id: 2,
    name: "맘마미아",
    img: "https://ticketimage.interpark.com/Play/image/large/23/23000103_p.gif",
    start: 2,
    lacation: "잠실 종합운동장",
    coin: 3.5,
  },
  {
    id: 3,
    name: "2023 오은영 토크쇼",
    img: "http://ticketimage.interpark.com/rz/image/play/goods/poster/23/23000721_p_s.jpg",
    start: 3,
    lacation: "잠실 종합운동장",
    coin: 2.5,
  },
  {
    id: 4,
    name: "2023 김수영 콘서트",
    img: "http://ticketimage.interpark.com/rz/image/play/goods/poster/23/23003674_p_s.jpg",
    start: 3,
    lacation: "잠실 종합운동장",
    coin: 2.5,
  },
  {
    id: 5,
    name: "미스터 트롯2",
    img: "http://ticketimage.interpark.com/Play/image/large/23/23003941_p.gif",
    start: 5,
    lacation: "잠실 종합운동장",
    coin: 4.0,
  },
  {
    id: 6,
    name: "TXT 월드 투어",
    img: "http://ticketimage.interpark.com/Play/image/large/23/23000980_p.gif",
    start: 5,
    lacation: "잠실 종합운동장",
    coin: 4.5,
  },
  {
    id: 7,
    name: "톤앤뮤직 페스티벌 2023",
    img: "http://ticketimage.interpark.com/Play/image/large/23/23003443_p.gif",
    start: 7,
    lacation: "잠실 종합운동장",
    coin: 2.5,
  },
];
function PerformList() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
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
        <p className="text-lg font-bold">{location.state}</p>
        <p className="w-7"></p>
      </div>

      <div className="mt-10">
        {dummyData &&
          dummyData.map((da) => (
            <div key={da.id}>
              <Link to="/perform/detail" state={da.id} className="flex mb-5">
                <img
                  src={da.img}
                  className="h-32 mx-3 rounded"
                  alt="poster"
                ></img>
                <div className="w-full">
                  <p className="text-red-500 font-bold">D-{da.start}</p>
                  <p className="font-bold text-lg">{da.name}</p>
                  <p>{da.lacation}</p>
                  <p className="text-right mt-3 mr-2">
                    <span className="font-bold mr-1">{da.coin}</span>
                    <span>COIN</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PerformList;
