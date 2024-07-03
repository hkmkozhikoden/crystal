import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../asstes/images/diamond/1.webp";
import Banner2 from "../asstes/images/img/12.jpg";
import Banner3 from "../asstes/images/img/3.jpg";
import Banner4 from "../asstes/images/img/4.jpg";
import '../asstes/css/banner.css';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    loop: true,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current)
  };
  const marqueeContent = [
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", link: "#" },
    { text: "I can be another link", link: "#" },
    { text: "Or just some text", link: "#" }
  ];

  return (
    <div className="">
      <section className="banner pt-0">
        <div className="overflow-hidden ">
          <div className="banner-cover">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="banner-slide">
                  <div className={`banner-content ${currentSlide === index ? 'active' : ''}`}>
                    <h1 className="text-xl-semibold mb-4">{d.mainhead}</h1>
                    <button className="text-xl-semibold btn-1 "><Link to='./diamond'>{d.name}</Link></button>
                  </div>
                  <img src={d.img} alt={d.name} className="banner-img" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}



const data = [
  {
    name:'Book Now',
    img: Banner1,
    mainhead:
      "Shine Bright with Our Exquisite Jewellery",
  },
  {
    name:'Book Now',
    img: Banner2,
    mainhead:"Discover Timeless Elegance"  },
  {
    name:'Book Now',
    img: Banner3,
    mainhead:
      "Best & Amazing Adventure in The World.",
  },
  {
    name:'Book Now',
    img: Banner4,
    mainhead:
      "The Ultimate Expression of Luxury",
  },
];

export default Banner;
