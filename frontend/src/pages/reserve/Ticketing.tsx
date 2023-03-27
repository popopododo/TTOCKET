import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Modal from "../../components/modal/Modal";
import axiosApi from "../../services/axiosApi";
import SeatList from "./seat/SeatList";

interface Perform {
  title: string;
  location: string;
  price:number;
}

function Ticketing() {
  const [seats_state, setSeats_state] = useState<string[][]>([]);
  const [performInfo, setPerformInfo] = useState<Perform>({
    title: "",
    location: "",
    price:0,
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
          {
            seats_state.map((seat, index)=>{
                return (
                    <SeatList 
                        seats_state={seat}
                        modalOpen={handleReserveModalOpen}
                        cols={index}
                    />
                )
            })
          }
        
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleReserveModalClose}
        performId={performId}
        reserve={{title : performInfo.title, seatNumber : seatNumber, price : performInfo.price}}
      />
      
    </div>
  );
}

export default Ticketing;
