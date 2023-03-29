import React, { useCallback, useEffect, useState } from "react";
import "../../css/Ticket.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useWeb3 from "../../services/web3/useWeb3";
import TicketHomeCard from "./TicketHomeCard";
import { TicketData } from "../../global";

function TicketHome() {
  const [address, setAddress] = useState();
  const { tokenContract } = useWeb3();
  const id = useSelector((state: RootState) => state.persistedReducer.user.id);
  const nickname =useSelector((state: RootState) => state.persistedReducer.user.nickname);
  const [ticketList, setTicketList] = useState<TicketData[]>();
  const [ticketSize, setTicketSize] = useState<number>();

  const getRetrieve = useCallback(async () => {
    const result = await tokenContract?.methods
      .getBeforeTicketList()
      .call({ from: address });
    if (result !== undefined) {
      setTicketList(result[0]);
      setTicketSize(parseInt(result[1]));
    }
  }, [address, tokenContract?.methods]);

  useEffect(() => {
    setAddress(id);
    getRetrieve();
  }, [id, getRetrieve]);
  return (
    <div className="">
      <p className="pt-32 mb-8 text-xl font-bold text-center">{nickname} 님의 티켓</p>

      {ticketList !== undefined &&
        ticketSize !== undefined &&
        ticketSize !== 0 && (
          <div className="flex overflow-x-auto snap-mandatory TicketList">
            {ticketList.map((ticket: any, index: number) =>
              index < ticketSize ? (
                <TicketHomeCard
                  key={index}
                  cardData={ticket}
                  index={index}
                ></TicketHomeCard>
              ) : null
            )}
          </div>
        )}
      {ticketSize !== undefined && ticketSize === 0 && (
        <div className="flex justify-center mt-32 place-items-center">
          <div>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-32 h-32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <p className="mt-4 text-2xl font-bold text-center">
              이용 가능한 티켓이 없습니다.
            </p>
            <p className="mt-4 text-center text-gray-400">
              티켓을 예매하고 티켓을 관리해보세요!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketHome;
