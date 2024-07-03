import React, { useEffect } from 'react';
import Diamond from '../asstes/images/img/12.webp'
import Diamond1 from '../asstes/images/img/14.webp'
import '../asstes/css/diamond-view.css'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
const DiamondSingleView = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Options
    });

    // Cleanup on unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div>
      <section className='diamonds-view'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6" data-aos="fade-right" data-aos-offset="10">
                    <a href={Diamond} data-fancybox="gallery">
                      <img src={Diamond} alt="Diamond" className='diamond-img rounded-5' />
                    </a>
                    <a href={Diamond1} data-fancybox="gallery">
                    </a>
                </div>
                <div className="col-md-6" data-aos="fade-left" data-aos-offset="10">
                    <div className="diamond-cont">
                        <h4>lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt corrupti optio iste, possimus voluptatem quia? Nihil, quia qui architecto explicabo corrupti totam, facere vitae non dolorem soluta suscipit illo et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi consequuntur et impedit consequatur sint eligendi amet voluptatum accusamus porro, ducimus laborum, quis iure sed vel? In eaque voluptatibus reiciendis ea earum quas placeat, consequatur, obcaecati animi unde necessitatibus commodi?</p>
                       <div className="d-flex"> <h6 className='me-3'>₹1234</h6> <h6>Offer Price ₹1233 </h6></div>
                       <button className='btn-now rounded-5'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default DiamondSingleView;
