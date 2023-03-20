import React from "react";
import Slider from "react-slick";
import style from "../../css/Reserve.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

interface dummyType {
  id: number;
  name: string;
  img: string;
}

function PerformSlider({ data }: { data: dummyType[] }) {
  const settings = {
    infinite: false,
    speed: 500,
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
            <Link to="detail" state={ob.id} key={ob.id}>
              <div className={style.sidelistt}>
                <img src={ob.img} alt="사진" className="h-36 mt-1" />
                {/* <p className="text-sm">{ob.name}</p> */}
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
export default PerformSlider;
