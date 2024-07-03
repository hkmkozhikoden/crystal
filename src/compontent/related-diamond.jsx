import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import diamond1 from '../asstes/images/img/12.jpg'
import diamond2 from '../asstes/images/img/6.jpg'
import diamond3 from '../asstes/images/img/17.jpg'
import diamond4 from '../asstes/images/img/2.jpg'
import diamond5 from '../asstes/images/img/5.jpg'
import diamond6 from '../asstes/images/img/7.jpg'
import '../asstes/css/related-diamond.css'
import { Link } from 'react-router-dom';
const RealtedDiamond = () => {
    const settings = {
      dots: false,
      arrows: false,
      slidesToScroll:1,
      slidesToShow:4,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [{
 
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
   
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
   
      }]
    };
    
  return (
    <div>
      <section className='related-diamond'>
        <div className="container">
          <div className="col-md-12">
            <h3 className='text-center mb-3'>Realated Products</h3>
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div key={index} className='blog-slick'>
                     <Link to={d.link}>
                     <div className="diamond-card" data-aos="fade-up" data-aos-offset="10">
                          <div className="img-card position-relative">
                            <img src={d.img} alt={d.name}  className='diamond-img '/>
                          </div>
                         <div className="diamond-cont">
                          <p className='text-red mt-2 mb-2'>{d.count}</p>
                          <p className='text-uppercase mb-1'>{d.head}</p>
                          <p className='text-uppercase fw-bold '>{d.price}</p>
                        </div>
                      </div>
                     </Link>
                   </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

const data = [
    {
        img: diamond1,
        head: 'Diamond Ring',
        price: '1400',
        count:'only one pice is left',
        link:'/gold',
    },
    {
        img:diamond2,
        head:'Diamond Nosepin',
        price: '1400',
        count:'only one pice is left',
        link:'/gold',
    },
    {
        img:diamond3,
        head:'Diamond Bangle',
        price: '1400',
        count:'only one pice is left',
        link:'/gold',
    },
    {
        img:diamond4,
        head:'Diamond pendant',
        price: '1400',
        count:'only one pice is left',
        link:'/gold',
    },
    {
        img:diamond5,
        head:'Diamond necklace',
        price: '1400',
        count:'only one pice is left',
        link:'/gold',
    },
    {
        img:diamond6,
        head:'Diamond earring',
        price: '1400',
        count:'only one pice is left',
        link:'/gold',
    },
];


export default RealtedDiamond
