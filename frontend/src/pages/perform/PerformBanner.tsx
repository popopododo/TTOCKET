import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

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
  return (
    <div className="page-carousel">
      <Slider {...settings}>
        {data &&
          data.map((da) => (
            <img
              src={da.poster}
              className="object-cover w-full h-40 object-top"
              alt="사진"
              key={da.id}
            />
          ))}
      </Slider>
    </div>
  );
}

export default PerformBanner;
