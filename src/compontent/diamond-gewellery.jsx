import React from 'react'
import Slider from 'react-slick'
import '../asstes/css/diamond-gewellery.css'
import diamond1 from '../asstes/images/img/12.jpg'
import diamond2 from '../asstes/images/img/6.jpg'
import diamond3 from '../asstes/images/img/17.jpg'
import diamond4 from '../asstes/images/img/2.jpg'
import diamond5 from '../asstes/images/img/5.jpg'
import diamond6 from '../asstes/images/img/7.jpg'
const DiamondGewellery = () => {
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
      <section className='diamond-gewellery'>
        <div className="container">
           <div className="row align-items-center justify-content-center">
              <div className="col-12 mt-2 mb-2"data-aos="fade-down" data-aos-offset="10">
                <h3 className='text-center sub-head text-uppercase mb-4 '>Diamond Jewellery</h3>
              </div>
              <div className="col-12" >
                <div className="blog-slider-slick justify-content-center" data-aos="fade-up" data-aos-offset="10">
                     <Slider {...settings}>
                         {data.map((d, index) => (
                             <div key={index} className='blog-slick'>
                                 <div className="diamond-card">
                                     <div className="img-card position-relative">
                                     <img src={d.img} alt={d.name}  className='diamond-img'/>
                                     </div>
                                     <div className="diamond-cont">
                                         <h6 className='text-uppercase fw-bold'>{d.head}</h6>
                                     </div>
                                 </div>
                             </div>
                        ))}
                     </Slider>
                 </div>
              </div>
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
    },
    {
        img:diamond2,
        head:'Diamond Nosepin',
    },
    {
        img:diamond3,
        head:'Diamond Bangle',
    },
    {
        img:diamond4,
        head:'Diamond pendant',
    },
    {
        img:diamond5,
        head:'Diamond necklace',
    },
    {
        img:diamond6,
        head:'Diamond earring',
    },
];

export default DiamondGewellery;
