import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import useWeb3 from "../../services/web3/useWeb3";

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
  const [address, setAddress] = useState();
    const { tokenContract } = useWeb3();
    const id = useSelector((state: RootState) => state.persistedReducer.user.id);
    const [afterTicket, setAfterTicket] = useState<any[]>();

    const getRetrieve = useCallback(
        async () => {
            const result = await tokenContract?.methods.getAfterTicketList().call({from : address});
            setAfterTicket(result);
      },
      [address, tokenContract?.methods],
    )
    
    useEffect(() => {
        setAddress(id);
        getRetrieve();
    }, [id, getRetrieve]);
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-full h-20 text-center">
        <p className="mt-6 text-2xl font-bold">티켓 보관함</p>
      </div>
        <div>
          {afterTicket !== undefined &&
            afterTicket[0].map((data : any) => (
              <Link key={data.id} to="/box/detail" state={data}>
                <div
                  className="flex items-center my-4 shadow-md w-80 h-28 shadow-gray-400"
                >
                  <div className="h-28 w-4 bg-[#FB7185] mr-2"></div>
                  <img src={data.performPoster} alt="poster" className="w-16 h-24" />
                  <div className="mb-1 ml-2">
                    <p className="mb-2 text-lg font-bold">{data.title}</p>
                    <p className="text-sm font-bold text-slate-500">
                      {data.date}
                    </p>
                    <p className="text-sm font-bold text-slate-500">
                      {data.seatNum}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          {dummyData && dummyData.length === 0 && (
            <div>
              <p className="flex items-center justify-center mt-10">
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
    </div>
  );
}

export default BoxHome;
