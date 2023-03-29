import React from "react";
import Slider from "react-slick";
import style from "../../css/Reserve.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

interface soonDataType {
  description: string;
  endTime: string;
  etc: string;
  id: number;
  location: string;
  max_seats: number;
  poster: string;
  price: number;
  startTime: string;
  title: string;
  user: object;
  performance_id: number;
}

function PerformSlider({ data }: { data: soonDataType[] }) {
  const settings = {
    infinite: false,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    cssEase: "linear",
    centerMode: false,
    arrows: true,
  };

  return (
    <div className="page-carousel">
      <Slider {...settings} className={style.sidebody}>
        {data &&
          data.map((ob) => (
            <Link to="detail" state={ob.performance_id} key={ob.performance_id}>
              <div className={style.sidelistt}>
                <img
                  src={`https://ipfs.io/ipfs/${ob.poster}`}
                  // src={ob.poster}
                  alt="사진"
                  className="h-36 mt-1"
                />
                {/* <p className="text-sm">{ob.name}</p> */}
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
export default PerformSlider;
