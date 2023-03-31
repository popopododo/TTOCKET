import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useWeb3 from "../../services/web3/useWeb3";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import HeaderNav from "../../components/HeaderNav";
import { useEffect, useState, useCallback } from "react";

function SponsorBehindList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { tokenContract } = useWeb3();
  const performId = location.state;
  const id = useSelector((state: RootState) => state.persistedReducer.user.id);
  const handleGoBack = () => {
    navigate(-1);
  };

  const [behindList, setBehindList] = useState<string[]>([]);

  // const getBehindList = useCallback(async () => {

  // }, [])

  const getBehindHandler = useCallback(async () => {
    try {
      const solres = await tokenContract?.methods
        .getBehindList(location.state)
        .call({
          from: id,
        });
      if (solres !== undefined) {
        setBehindList(solres);
      }
      // const data = solres;
      // setBehindList((prevData) => [...prevData, ...data]);
    } catch (err) {
      console.log(err);
    }
  }, [id, tokenContract?.methods, location.state]);

  useEffect(() => {
    getBehindHandler();
  }, [getBehindHandler]);
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
          <p className="text-lg font-bold ml-6">비하인드 목록</p>
          <Link
            to="add"
            className="text-gray-400 font-bold mr-3"
            state={performId}
          >
            등록
          </Link>
        </div>
        <div className="grid grid-cols-3 mt-10 pl-5">
          {behindList &&
            behindList.map((el, idx) => (
              <div key={idx}>
                <img
                  src={`https://ipfs.io/ipfs/${el}`}
                  alt="비하인드사진"
                  className="h-40 mb-5"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SponsorBehindList;
