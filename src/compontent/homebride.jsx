import React from 'react'
import Bride from '../asstes/images/img/9.jpg'
import '../asstes/css/home-bride.css'
const HomeBride = () => {
  return (
    <div>
      <section className='home-bride'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="cont">
                       <h4>
                        Lorem Ipsum is simply dummy text of the  
                        </h4>
                        <p>
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bride">
                        <img src={Bride} alt="Bride" className='bride-img' />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomeBride
