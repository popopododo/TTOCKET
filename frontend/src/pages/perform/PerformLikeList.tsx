import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import axiosApi from "../../services/axiosApi";

interface postType {
  desc: string;
  end_time: string;
  etc: string;
  id: number;
  location: string;
  max_seats: number;
  poster: string;
  price: number;
  start_time: string;
  title: string;
  user_id: string;
}

function PerformLikeList() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = "0xca7AC9f4186853E0641723fc1F29BaD95e58b208";

  const [posts, setPosts] = useState<postType[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const page = useRef<number>(0);
  const [ref, inView] = useInView();

  const rollPage = useCallback(async () => {
    try {
      const res = await axiosApi.get(
        `/performance/likelist/${userId}/${page.current}`
      );
      const data = res.data.body.user_like_list;
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setHasNextPage(data.length === 6);
      if (data.length) {
        page.current += 1;

        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handler = async () => {
    try {
      const res = await axiosApi.get(
        `/performance/likelist/${userId}/${page.current}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      rollPage();
    }
  }, [rollPage, hasNextPage, inView]);

  useEffect(() => {
    handler();
  }, []);

  return (
    <div>
      <div className="h-10 flex items-center justify-between mt-20">
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
        {posts &&
          posts.map((dal) => (
            <div key={dal.id}>
              <Link to="/perform/detail" state={dal.id} className="flex mb-5">
                <img
                  src={dal.poster}
                  className="h-32 w-24 mx-3 rounded"
                  alt="poster"
                ></img>
                <div className="w-full">
                  <p className="text-red-500 font-bold">D-{dal.start_time}</p>
                  <p className="font-bold text-lg">{dal.title}</p>
                  <p>{dal.location}</p>
                  <p className="text-right mt-3 mr-2">
                    <span className="font-bold mr-1">{dal.price}</span>
                    <span>COIN</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div ref={ref} />
    </div>
  );
}

export default PerformLikeList;
