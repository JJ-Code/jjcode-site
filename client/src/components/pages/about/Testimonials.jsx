import React, { useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import climb from "../../../images/climb.jpg";
import { v4 as uuid } from 'uuid';
import TestimonialsIcofont from "./aboutLayouts/TestimonialsIcofont";
import Icofont from 'react-icofont';
import { chunkArray } from '../../../utilities/helperFX';

const Testimonials = () => {
  const testimonialsDataObj = [{
    name: "john",
    image: climb,
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "pat",
    image: climb,
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "chris",
    image: climb,
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "Jan",
    image: climb,
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  }]
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

//   const iconList = (arr) => {
//     arr.map((curr) => {
//      console.log(curr)
//      let block =   (<Carousel.Item >
//           <div className="testimonial-item" data-aos="fade-up">
//             <Carousel.Caption>
              
//               <p>  {curr.comment} </p>
//               <p>
//                 <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
//                 {curr.comment}
//                 <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
//               </p>
//             </Carousel.Caption>
//             <img
//               className="testimonial-img resizeImage"
//               src={curr.image}
//               alt={curr.name}
//             />
//             <Carousel.Caption>
//               <h3>{curr.name}</h3>
//               <h4>{curr.jobTitle}</h4>
//             </Carousel.Caption>
//           </div>
//         </Carousel.Item>)
// return block

      
//     })
//   }
  return (
    <div className="testimonials container">

      <div className="section-title">
        <h2>Testimonials</h2>
      </div>

      <div className="owl-carousel testimonials-carousel">


        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/* {testimonialsDataObj.map((curr) => {
            return <TestimonialsIcofont name={curr.name} image={curr.image} comment={curr.comment} jobTitle={curr.jobTitle} key={uuid()} handleSelect={handleSelect}/>
          })} */}

          
          <Carousel.Item key={uuid()}>
            <div className="testimonial-item" data-aos="fade-up">
              <Carousel.Caption>
                {console.log(testimonialsDataObj[0].comment)}
                <Icofont icon="court" />
                <p>
                  
                  {testimonialsDataObj[0].comment}
                  <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </Carousel.Caption>
              <img
                className="testimonial-img resizeImage"
                src={testimonialsDataObj[0].image}
                alt={testimonialsDataObj[0].name}
              />
              <Carousel.Caption>
                <h3>{testimonialsDataObj[0].name}</h3>
                <h4>{testimonialsDataObj[0].jobTitle}</h4>
              </Carousel.Caption>
            </div>
          </Carousel.Item> 

          <Carousel.Item key={uuid()}>
            <div className="testimonial-item" data-aos="fade-up">
              <Carousel.Caption>
                {console.log(testimonialsDataObj[1].comment)}
                <p>  {testimonialsDataObj[1].comment} </p>
                <p>
                  <Icofont icon="bx bxs-quote-alt-left quote-icon-left" />
                  {testimonialsDataObj[1].comment}
                  <Icofont icon="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </Carousel.Caption>
              <img
                className="testimonial-img resizeImage"
                src={testimonialsDataObj[1].image}
                alt={testimonialsDataObj[1].name}
              />
              <Carousel.Caption>
                <h3>{testimonialsDataObj[1].name}</h3>
                <h4>{testimonialsDataObj[1].jobTitle}</h4>
              </Carousel.Caption>
            </div>
          </Carousel.Item> 





 
        </Carousel>

      </div>

    </div>
  )
}

export default Testimonials
