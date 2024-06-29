import React, { useState } from 'react';
import Diamond1 from '../asstes/images/diamond/1.webp';
import Diamond2 from '../asstes/images/diamond/2.webp';
import Diamond3 from '../asstes/images/diamond/3.webp'
import Diamond4 from '../asstes/images/diamond/4.webp'
import Diamond5 from '../asstes/images/diamond/5.webp'
import Diamond6 from '../asstes/images/diamond/6.webp'
import Diamond7 from '../asstes/images/diamond/7.webp'
import Diamond8 from '../asstes/images/diamond/8.webp'
import Diamond9 from '../asstes/images/diamond/9.webp'
import Diamond10 from '../asstes/images/diamond/10.webp'
import Diamond11 from '../asstes/images/img/11.jpg'
import Diamond12 from '../asstes/images/img/12.jpg'
import Diamond13 from '../asstes/images/img/13.jpg'
import Diamond14 from '../asstes/images/img/14.jpg'
import Diamond15 from '../asstes/images/img/11.jpg'
import Diamond16 from '../asstes/images/img/16.jpg'
import Diamond17 from '../asstes/images/img/17.jpg'
import Diamond18 from '../asstes/images/img/18.jpg'
import Diamond19 from '../asstes/images/img/14.jpg'
import Diamond20 from '../asstes/images/img/11.jpg'
import Diamond21 from '../asstes/images/img/16.jpg'
import Diamond22 from '../asstes/images/img/1.jpg'
import Diamond23 from '../asstes/images/img/12.jpg'




import { Link } from 'react-router-dom';
import '../asstes/css/diamond.css';

const Gold = () => {
  const [diamonds, setDiamonds] = useState([
    { id: 1, img: Diamond1, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 2, img: Diamond2, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 3, img: Diamond3, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 4, img: Diamond4, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 5, img: Diamond5, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 6, img: Diamond6, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 7, img: Diamond7, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 8, img: Diamond8, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 9, img: Diamond9, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 10, img: Diamond10, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 11, img: Diamond11, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 13, img: Diamond12, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 13, img: Diamond13, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 14, img: Diamond14, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 15, img: Diamond15, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 16, img: Diamond16, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 17, img: Diamond17, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 18, img: Diamond18, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 19, img: Diamond19, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 20, img: Diamond20, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 21, img: Diamond21, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 22, img: Diamond22, title: 'Gold Earring For Women', price: '₹1234' },
    { id: 23, img: Diamond23, title: 'Gold Earring For Women', price: '₹1234' },


  ]);

  return (
    <div>
      <section className='gold'>
        <div className="container">
          <div className="row">
            {diamonds.map((diamond) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-3 mt-3" key={diamond.id} data-aos="fade-up" data-aos-offset="10">
               <Link to="/diamond-view"> <div className="gold-card anim-slow">
                  <img src={diamond.img} alt={diamond.title} className='gold-img' />
                  <div className="gold-cont text-center mt-3 mb-2">
                    <h6>{diamond.title}</h6>
                    <p className="price">{diamond.price}</p>
                  </div>
                </div></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gold;
