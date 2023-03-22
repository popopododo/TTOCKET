import React from "react";
import { Link } from "react-router-dom";

interface dummyType {
  id: number;
  name: string;
  img: string;
  start: number;
  location: string;
  seat: string;
  date: string;
}

const dummyData: dummyType[] = [
  {
    id: 1,
    name: "데스노트",
    img: "http://ticketimage.interpark.com/rz/image/play/goods/poster/23/23002291_p_s.jpg",
    start: 1,
    location: "잠실 종합운동장",
    seat: "1층 C열 32번",
    date: "2023-05-01",
  },
  {
    id: 2,
    name: "맘마미아",
    img: "http://ticketimage.interpark.com/rz/image/play/goods/poster/23/23000103_p_s.jpg",
    start: 2,
    location: "잠실 종합운동장",
    seat: "2층 A열 03번",
    date: "2023-06-01",
  },
  {
    id: 3,
    name: "2023 오은영 토크쇼",
    img: "http://ticketimage.interpark.com/rz/image/play/goods/poster/23/23000721_p_s.jpg",
    start: 3,
    location: "잠실 종합운동장",
    seat: "J열 10번",
    date: "2023-07-01",
  },
];

function BoxHome() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="h-20 w-full text-center">
        <p className="text-2xl font-bold mt-6">티켓 보관함</p>
      </div>
      <Link to="">
        <div>
          {dummyData &&
            dummyData.map((data) => (
              <div
                key={data.id}
                className="flex w-80 h-28 items-center my-4 shadow-md shadow-gray-400"
              >
                <div className="h-28 w-4 bg-[#FB7185] mr-2"></div>
                <img src={data.img} alt="poster" className="w-16 h-24" />
                <div className="ml-2 mb-1">
                  <p className="font-bold text-lg mb-2">{data.name}</p>
                  <p className="text-slate-500 text-sm font-bold">
                    {data.date}
                  </p>
                  <p className="text-slate-500 text-sm font-bold">
                    {data.seat}
                  </p>
                </div>
              </div>
            ))}
          {dummyData && dummyData.length === 0 && (
            <div>
              <p className="flex justify-center items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </p>
              <p className="mt-7">구매하신 티켓이 없습니다</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default BoxHome;
