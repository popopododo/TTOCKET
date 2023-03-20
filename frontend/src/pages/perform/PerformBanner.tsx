import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

interface dummyType {
  id: number;
  name: string;
  img: string;
  start: number;
  location: string;
  coin: number;
  description: string;
}

function PerformBanner({ data }: { data: dummyType[] }) {
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
              src={da.img}
              className="object-cover w-full h-40 object-top"
              alt="사진"
            />
          ))}
      </Slider>
    </div>
  );
}

export default PerformBanner;
