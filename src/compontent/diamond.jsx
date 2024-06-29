import React, { useState } from 'react';
import Diamond1 from '../asstes/images/img/1.jpg';
import Diamond2 from '../asstes/images/img/2.jpg';
import Diamond3 from '../asstes/images/img/14.jpg'
import Diamond4 from '../asstes/images/img/4.jpg'
import Diamond5 from '../asstes/images/img/5.jpg'
import Diamond6 from '../asstes/images/img/6.jpg'
import Diamond7 from '../asstes/images/img/7.jpg'
import Diamond8 from '../asstes/images/img/8.jpg'
import Diamond9 from '../asstes/images/img/9.jpg'
import Diamond10 from '../asstes/images/img/10.jpg'
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

const Diamond = () => {
  const [diamonds, setDiamonds] = useState([
    { id: 1, img: Diamond1, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 2, img: Diamond2, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 3, img: Diamond3, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 4, img: Diamond4, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 5, img: Diamond5, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 6, img: Diamond6, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 7, img: Diamond7, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 8, img: Diamond8, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 9, img: Diamond9, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 10, img: Diamond10, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 11, img: Diamond11, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 13, img: Diamond12, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 13, img: Diamond13, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 14, img: Diamond14, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 15, img: Diamond15, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 16, img: Diamond16, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 17, img: Diamond17, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 18, img: Diamond18, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 19, img: Diamond19, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 20, img: Diamond20, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 21, img: Diamond21, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 22, img: Diamond22, title: 'Diamond Earring For Women', price: '₹1234' },
    { id: 23, img: Diamond23, title: 'Diamond Earring For Women', price: '₹1234' },


  ]);

  return (
    <div>
      <section className='diamond'>
        <div className="container">
          <div className="row">
            {diamonds.map((diamond) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-3 mt-3" key={diamond.id} data-aos="fade-up" data-aos-offset="10">
               <Link to="/diamond-view"> <div className="diamond-card">
                  <img src={diamond.img} alt={diamond.title} className='diamond-img' />
                  <div className="diamond-cont text-center mt-3 mb-2">
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

export default Diamond;
