import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import AlreadyModal from "../../components/modal/AlreadyReserveModal";
import Modal from "../../components/modal/Modal";
import axiosApi from "../../services/axiosApi";

interface Perform {
  title: string;
  location: string;
}

function Ticketing() {
  const [seats_state, setSeats_state] = useState<String[]>([]);
  const [performInfo, setPerformInfo] = useState<Perform>({
    title: "",
    location: "",
  });
  const [performId, setPerformId] = useState<number>(0);
  const location = useLocation();

  const getSeatInfo = async (performId: number) => {
    const { data } = await axiosApi.get(`/performance/reserve/${performId}`);

    // 좌석 정보 set하기
    setSeats_state(data.body.seats_state);

    // 공연 정보 set
    setPerformInfo(data.body.perform);

    console.log(data.body);
  };
  // 공연 좌석 정보 가져오기
  useEffect(() => {
    console.log(location.state);
    setPerformId(location.state);

    //공연 아이디
    getSeatInfo(location.state);
  }, [location.state]);

  // 공연 좌석 정보 가져오기
  useEffect(() => {
    console.log(location.state);
    setPerformId(location.state);

    //공연 아이디
    getSeatInfo(location.state);
  }, [location.state]);

  //모달창 노출 여부 state
  // 모달창 띄우기 false -> true
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 예매할 좌석 정보
  const [seatNumber, setSeatNumber] = useState<number>(-1);

  // 예매 확인 모달 창 띄우기
  const handleReserveModalOpen = (index: number) => {
    setSeatNumber(index);
    setIsModalOpen(true);
  };

  const handleReserveModalClose = () => {
    setIsModalOpen(false);
  };

  const [AlreadyModalOpen, setAlreadyModalOpen] = useState(false);
  const handleAlreadyModalOpen = () => {
    setAlreadyModalOpen(true);
  };
  const handleAlreadyModalClose = () => {
    setAlreadyModalOpen(false);
  };
  return (
    <div>
      <div className="m-2 mt-20">
        <p className="text-xl font-bold">
          {performInfo.title ? performInfo.title : ""}
        </p>
        <p className="text-xs">
          {performInfo.location ? performInfo.location : ""}
        </p>
        <div className="flex items-center justify-center h-32 mt-4 bg-gray-200 rounded-sm">
          <p className="text-lg font-bold">STAGE</p>
        </div>
        <div className="mt-20">
          <p className="text-xl font-bold ml-2">좌석</p>
          <div className="grid grid-flow-col grid-cols-8 mt-4">
            {/* 좌석 섹션 */}
            {seats_state.map((seat, index) => {
              if (seat === "EMPTY") {
                return (
                  <div
                    className="w-10 h-10 m-1 bg-ttokPink rounded-sm"
                    key={index}
                    onClick={() => {
                      handleReserveModalOpen(index + 1);
                    }}
                  ></div>
                );
              } else {
                return (
                  <div
                    className="w-10 h-10 m-1 bg-gray-300 rounded-sm"
                    key={index}
                    onClick={handleAlreadyModalOpen}
                  ></div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleReserveModalClose}
        seatNumber={seatNumber}
        performId={performId}
      />
      <AlreadyModal
        isOpen={AlreadyModalOpen}
        onClose={handleAlreadyModalClose}
      />
    </div>
  );
}

export default Ticketing;
