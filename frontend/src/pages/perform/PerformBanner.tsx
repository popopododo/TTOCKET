import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import formatDate from "../../components/date/formatDate";
import getDateDiff from "../../components/date/getDateDiff";

interface soonDataType {
  desc: string;
  end_time: string;
  etc: string;
  location: string;
  performance_id: number;
  max_seats: number;
  poster: string;
  price: number;
  start_time: string;
  title: string;
  user_id: object;
}

function PerformBanner({ data }: { data: soonDataType[] }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    vertical: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  let todayTime = new Date();
  return (
    <div className="page-carousel">
      <Slider {...settings}>
        {data &&
          data.map((da) => (
            <Link
              to="/perform/detail"
              state={da.performance_id}
              key={da.performance_id}
            >
              <img
                src={da.poster}
                className="object-cover w-full h-40 object-top relative"
                alt="사진"
              />
              <div className="absolute top-24 ml-4">
                <p className="text-red-400 font-bold">
                  D
                  {getDateDiff(da.end_time.slice(0, 10), formatDate(todayTime))}
                </p>
                <p className="text-white font-bold">{da.title}</p>
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}

export default PerformBanner;
