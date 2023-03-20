import { useLocation, useNavigate } from "react-router-dom";

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
      "살면서 당당하지 못했던 경험 혹은 당당하지 못해 생긴 고민을 메일로 남겨주세요 \n '당당함'에 대해 오은영 박사와 함께 이야기하고 해결하는 시간을 가져봅시다.",
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

function PerformItem() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col content-center">
      <div className="flex h-14 bg-gray-100 items-center">
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
      </div>
      <div
        // className="bg-[url(http://ticketimage.interpark.com/Play/image/large/23/23003443_p.gif)] bg-no-repeat bg-local bg-cover flex justify-center"
        className={`bg-[url(${
          dummyData[location.state - 1].img
        })] bg-no-repeat bg-local bg-cover`}
      >
        <div className="w-full h-full backdrop-blur-sm  flex justify-center">
          <img
            src={dummyData[location.state - 1].img}
            alt="poster"
            className="h-80 "
          ></img>
        </div>
      </div>

      <p className="font-bold text-2xl my-2">
        {dummyData[location.state - 1].name}
      </p>
      <p className="flex justify-between">
        <span className="text-right text-gray-500">
          {dummyData[location.state - 1].start}
        </span>
        <span className="text-right text-gray-500">
          {dummyData[location.state - 1].location}
        </span>
      </p>
      <p>{dummyData[location.state - 1].description}</p>
      <div className="flex mt-10">
        <p className="mr-4 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </p>
        <button className="bg-[#FB7185] text-white w-64 h-10 rounded font-bold">
          예매하기
        </button>
      </div>
    </div>
  );
}

export default PerformItem;
