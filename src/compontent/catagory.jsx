import React from 'react'
import Cat1 from '../asstes/images/img/2.jpg'
import Cat2 from '../asstes/images/img/6.jpg'
import Cat3 from '../asstes/images/img/4.jpg'
import Cat4 from '../asstes/images/img/5.jpg'

import '../asstes/css/catagory.css'
import { Link } from 'react-router-dom'
const Catagory = () => {
  return (
    <div>
    <section className="catagory">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3 text-center">
                    <h3>SHOP CRYSTAL ARORA'S LOOK IN PRERTO</h3>
                </div>
                <div className="col-lg-3 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                   <Link to='./gold'>
                   <div className="card">
                        <img src={Cat1} alt="Gold" className='catagory-img' />
                        <div className="card-cont anim-effect">
                            <h6>Gold</h6>
                        </div>
                    </div>
                   </Link>
                </div>
                <div className="col-lg-3 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                    <Link to='./diamond'>
                    <div className="card">
                        <img src={Cat2} alt="Gold" className='catagory-img' />
                        <div className="card-cont anim-effect">
                            <h6>Diamond</h6>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                   <Link to='./ring'>
                   <div className="card">
                        <img src={Cat3} alt="Gold" className='catagory-img' />
                        <div className="card-cont anim-effect">
                            <h6>Rings</h6>
                        </div>
                    </div>
                   </Link>
                </div>
                <div className="col-lg-3 col-md-4 mb-3 mt-3" data-aos="fade-up" data-aos-offset="10">
                   <Link to='./gift'>
                   <div className="card">
                        <img src={Cat4} alt="Gold" className='catagory-img' />
                        <div className="card-cont anim-effect">
                            <h6>Bracelet</h6>
                        </div>
                    </div>
                   </Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Catagory
