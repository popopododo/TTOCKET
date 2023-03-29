import useInput from "../../services/useInput";
import { useNavigate } from "react-router";
import { FormEvent, useState } from "react";
import ipfsCreate from "../../services/ipfsCreate";
import addPicture from "../../assets/addPicture.png";
import formatDate from "../../components/date/formatDate";

import axiosApi from "../../services/axiosApi";
import useWeb3 from "../../services/web3/useWeb3";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function SponsorPerformForm() {
  const navigate = useNavigate();
  const { tokenContract } = useWeb3();
  //정보
  let todayDate = formatDate(new Date()) + " 12:00:00";
  const [images, setImages] = useState<File>();

  //폼 내용
  const title = useInput("");
  const end_time = useInput(todayDate);
  const start_time = useInput(todayDate);
  const location = useInput("");
  const [price, setPrice] = useState(0);
  const [max_seats, setMax_seats] = useState<number>(8);
  const [desText, setDesText] = useState("");
  const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesText(e.target.value);
  };

  //아이디 가져오기
  const id = useSelector((state: RootState) => state.persistedReducer.user.id);
  //유효성 검사
  const isTitle = title.value.trim() !== "";
  const isLocation = location.value.trim() !== "";
  const isDes = desText.trim() !== "";
  //사진 업로드
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetFile = (e.target.files as FileList)[0];

    if (targetFile === undefined) {
      return;
    } else {
      setImages(targetFile);
    }
  };

  //공연 생성
  const submitPerformHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!isTitle) {
      alert("제목을 입력해주세요");
    } else if (!isLocation) {
      alert("장소를 입력해주세요");
    } else if (!isDes) {
      alert("공연 상세내용을 입력해주세요");
    } else {
      try {
        const res = await ipfsCreate.add(images!);
        console.log(res);
        const posterHash = res.path;
        if (res !== undefined) {
          try {
            const res = await axiosApi.post("performance/create", {
              title: title.value,
              user_id: id,
              start_time: start_time.value,
              end_time: end_time.value,
              location: location.value,
              price: price,
              max_seats: max_seats,
              poster: posterHash,
              desc: desText,
              etc: "보냅니다...",
            });
            console.log(res, "사진");
            if (res !== undefined) {
              const performId = res.data.body.performance_id;
              const cal = res.data.body.left_minute_perform;
              try {
                const solres = await tokenContract?.methods
                  .createPerform(
                    performId,
                    title.value,
                    desText,
                    max_seats,
                    location.value,
                    price * 10 ** 5,
                    cal,
                    posterHash,
                    Number(end_time.value.slice(0, 4)),
                    Number(end_time.value.slice(5, 7)),
                    Number(end_time.value.slice(8, 10)),
                    Number(end_time.value.slice(11, 13)),
                    Number(end_time.value.slice(14, 16))
                  )
                  .send({
                    from: id,
                    gas: 8000000,
                  });
                console.log(solres, "솔리디티");
              } catch (err) {
                console.log(err);
              }
              navigate(-1);
            }
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  //뒤로가기
  const handleGoBack = () => {
    navigate(-1);
  };
  //좌석 셀렉트 박스 선택
  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setMax_seats(Number(value));
    console.log(max_seats);
  };
  const selectVal = [8, 16];
  const changePrice = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    // <form onSubmit={submitPerformHandler}>
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
        <p className="text-xl font-bold">공연</p>
        <p className="text-gray-400 text-base font-bold mr-7"></p>
      </div>
      <div className="mt-16 overflow-y-auto mb-28 overflow-x-hidden">
        <div className="h-48 bg-gray-200 flex flex-col justify-center items-center">
          <img
            src={addPicture}
            alt="addpicture"
            className="w-24 h-24 mt-5 ml-10"
          ></img>
          <input
            type="file"
            accept="image/*"
            onChange={changeHandler}
            className="ml-28"
          />
        </div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={submitPerformHandler}
        >
          <div className="flex flex-col w-80 mt-9 px-2">
            <label className="text-base font-bold mb-2">공연 이름</label>
            <input
              type="text"
              {...title}
              className="border-b-2 h-9 border-[#FB7185] w-full"
            ></input>
            <label className="text-base font-bold mb-2 mt-6">
              공연 날짜 및 시간
            </label>
            <input
              type="text"
              {...end_time}
              className="border-b-2 h-9 border-[#FB7185]"
            />
            <label className="text-base font-bold mb-2 mt-6">
              예매 오픈 날짜 및 시간
            </label>
            <input
              type="text"
              {...start_time}
              className="border-b-2 h-9 border-[#FB7185]"
            />
            <label className="text-base font-bold mb-2 mt-6">공연 장소</label>
            <input
              type="text"
              {...location}
              className="border-b-2 h-9 border-[#FB7185] w-full"
            />
            <label className="text-base font-bold mb-2 mt-6">공연 가격</label>
            <input
              type="integer"
              onChange={changePrice}
              className="border-b-2 h-9 border-[#FB7185] w-full"
            />
            <label className="text-base font-bold mb-2 mt-6">좌석 수</label>
            <select
              onChange={selectHandler}
              className="block bg-gray-50 border border-gray-300 h-10 text-gray-900 text-lg rounded-md focus:ring focus:ring-[#FB7185] hover:ring-[#FB7185]"
            >
              {selectVal.map((val, idx) => (
                <option key={idx} value={val}>
                  {val}
                </option>
              ))}
            </select>
            <label className="text-base font-bold mb-2 mt-6">
              공연 상세 설명
            </label>
            <textarea
              onChange={textAreaHandler}
              className="h-20 border-2 rounded-sm border-[#FB7185] w-full"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-5 w-72 h-10 bg-[#FB7185] text-white rounded-lg "
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SponsorPerformForm;
