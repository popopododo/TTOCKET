import React, { useEffect } from "react";
import PerformBanner from "./PerformBanner";
import PerformSlider from "./PerformSlider";
import { Link } from "react-router-dom";
import axiosApi from "../../services/axiosApi";

interface dummyType {
  id: number;
  name: string;
  img: string;
  start: number;
  location: string;
  coin: number;
  description: string;
}

const dummyData: dummyType[] = [
  {
    id: 1,
    name: "데스노트",
    img: "https://ticketimage.interpark.com/Play/image/large/23/23002291_p.gif",
    start: 1,
    location: "잠실 종합운동장",
    coin: 3.5,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
  {
    id: 2,
    name: "맘마미아",
    img: "https://ticketimage.interpark.com/Play/image/large/23/23000103_p.gif",
    start: 2,
    location: "잠실 종합운동장",
    coin: 3.5,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
  {
    id: 3,
    name: "2023 오은영 토크쇼",
    img: "https://ticketimage.interpark.com/Play/image/large/23/23000721_p.gif",
    start: 3,
    location: "잠실 종합운동장",
    coin: 2.5,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
  {
    id: 4,
    name: "2023 김수영 콘서트",
    img: "https://ticketimage.interpark.com/Play/image/large/23/23003674_p.gif",
    start: 3,
    location: "잠실 종합운동장",
    coin: 2.5,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
  {
    id: 5,
    name: "미스터 트롯2",
    img: "http://ticketimage.interpark.com/Play/image/large/23/23003941_p.gif",
    start: 5,
    location: "잠실 종합운동장",
    coin: 4.0,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
  {
    id: 6,
    name: "TXT 월드 투어",
    img: "http://ticketimage.interpark.com/Play/image/large/23/23000980_p.gif",
    start: 5,
    location: "잠실 종합운동장",
    coin: 4.5,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
  {
    id: 7,
    name: "톤앤뮤직 페스티벌 2023",
    img: "http://ticketimage.interpark.com/Play/image/large/23/23003443_p.gif",
    start: 7,
    location: "잠실 종합운동장",
    coin: 2.5,
    description:
      "2022년을 강타하며 초대형 흥행 신드롬을 일으킨 뮤지컬 <데스노트>가 돌아온다. \n 매력적인 캐릭터와 두 천재의 긴장감 넘치는 스토리,\n 프랭크 와일드혼의 감각적인 음악, 하이 테크놀로지 뮤지컬의 진수로 무대예술의 황홀경을 선사하며 \n 다시한번 '데스노트' 의 초현실 세계로 초대한다.",
  },
];

function PerformHome() {
  const performDataHandler = async () => {
    const res = await axiosApi.get("", {
      headers: {
        userId: "",
      },
    });
  };

  useEffect(() => {
    performDataHandler();
  });
  return (
    <div className="mt-10">
      <div className="mb-7">
        <PerformBanner data={dummyData} />
      </div>
      <div className="h-40 mb-20">
        <div className="mb-1 flex justify-between">
          <p className="font-bold flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-1 text-red-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1">곧 티켓 예매가 마감돼요!</span>
          </p>
          <p className="mr-1 text-sm text-gray-500 font-bold">
            <Link to="performlist" state="전체 공연 목록">
              공연 전체목록
            </Link>
          </p>
        </div>
        <div className="bg-[#FFE4E4] h-44 flex flex-col justify-center">
          <PerformSlider data={dummyData} />
        </div>
      </div>
      <div>
        <div className="mb-1 flex justify-between">
          <p className="ml-1 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-[#FF9191]"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>

            <span className="font-bold ml-1">나의 관심 목록</span>
          </p>
          <p className="mr-1 text-sm text-gray-500 font-bold">
            <Link to="performLikelist" state="나의 관심">
              목록가기
            </Link>
          </p>
        </div>
        <div className="bg-[#FFE4E4] h-44 flex flex-col justify-center">
          <PerformSlider data={dummyData} />
        </div>
      </div>
    </div>
  );
}

export default PerformHome;
