import React from 'react'
import climb from "../../../images/climb.jpg";
import reksImage from "../../../images/recs/rec-rekha.jpeg";
import { v4 as uuid } from 'uuid';
import TestimonialsIcofont from "./aboutLayouts/TestimonialsIcofont";
import Icofont from 'react-icofont';
import { chunkArray } from '../../../utilities/helperFX';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const testimonialsDataObj = [{
    name: "reks",
    image: reksImage,
    linkedinURL: "https://www.linkedin.com/in/jaymee-liu",
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "pat",
    image: climb,
    linkedinURL: "https://www.linkedin.com/in/jaymee-liu",
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "chris",
    image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
    linkedinURL: "https://www.linkedin.com/in/jaymee-liu",
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "Jan",
    image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
    linkedinURL: "https://www.linkedin.com/in/jaymee-liu",
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },

  {
    name: "chris",
    image: climb,
    linkedinURL: "https://www.linkedin.com/in/jaymee-liu",
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  },
  {
    name: "Jan",
    image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
    linkedinURL: "https://www.linkedin.com/in/jaymee-liu",
    comment: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    jobTitle: "CEO"
  }

  ]

  console.log(testimonialsDataObj)
  const third = chunkArray(testimonialsDataObj, 3)

  console.log(third);

  const wrapper = (arr) => {
    return (<div className="myCarousel" className="row testimonial-item">
      {arr}
    </div>)

  }

  return (
    <div className="testimonials container">

      <div className="section-title">
        <h2>Testimonials</h2>
      </div>

      <div className="testimonials-carousel">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >

          {/* created a map to loop thru the chuck arrary who has been cut into a subarray of 3 objects to represents the 3 cards per slide. created a wrapper to hold the cards in 1 slide. */}
          {
            third.map((currArr => {

              let subArr = currArr.map((curr)=>{
                return <TestimonialsIcofont 
                  name={curr.name} image={curr.image} comment={curr.comment} jobTitle={curr.jobTitle} linkedinURL={curr.linkedinURL} key={uuid()} />
                  })
              return wrapper(subArr)
            }))
          }





          {/* slide 1 */}
          <div className="myCarousel" className="row testimonial-item">

            {/* card 1 */}
            <div className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
              <p>
                <Icofont icon="quote-left" className="quote-icon-left" />
                  It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site
                   <Icofont icon="quote-right" className="quote-icon-right" />
              </p>

              <img src={reksImage} className="resizeImage rounded-circle z-depth-1 img-fluid testimonial-img" />
              <h3>Shirley Fultz</h3>
              <h4>
                Designer 	&nbsp;
                   <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" rel="noopener noreferrer" className="linkedin">
                  <Icofont icon="icofont-linkedin" />
                </a>
              </h4>

            </div>

            {/* card2  */}

            <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
              <p>
                <Icofont icon="quote-left" className="quote-icon-left" />
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site
                   <Icofont icon="quote-right" className="quote-icon-right" />
              </p>

              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle z-depth-1 img-fluid" className="rounded-circle z-depth-1 img-fluid testimonial-img" />
              <h3>Shirley Fultz</h3>
              <h4>Designer 	&nbsp;
                   <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" className="linkedin">
                  <Icofont icon="icofont-linkedin" />
                </a>
              </h4>

            </div>


            {/* card3  */}

            <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
              <p>
                <Icofont icon="quote-left" className="quote-icon-left" />
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site
                   <Icofont icon="quote-right" className="quote-icon-right" />
              </p>

              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1 img-fluid" className="rounded-circle z-depth-1 img-fluid testimonial-img" />
              <h3>Shirley Fultz</h3>
              <h4>Designer 	&nbsp;
                   <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" className="linkedin">
                  <Icofont icon="icofont-linkedin" />
                </a>
              </h4>

            </div>
          </div>
          {/* end of row */}

          {/* slide 1 */}
          <div className="myCarousel" className="row testimonial-item">

            {/* card 1 */}
            <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
              <p>
                <Icofont icon="quote-left" className="quote-icon-left" />
                  It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site
                   <Icofont icon="quote-right" className="quote-icon-right" />
              </p>

              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1 img-fluid testimonial-img" />
              <h3>Shirley Fultz</h3>
              <h4>
                Designer 	&nbsp;
                   <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" className="linkedin">
                  <Icofont icon="icofont-linkedin" />
                </a>
              </h4>

            </div>

            {/* card2  */}

            <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
              <p>
                <Icofont icon="quote-left" className="quote-icon-left" />
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site
                   <Icofont icon="quote-right" className="quote-icon-right" />
              </p>

              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle z-depth-1 img-fluid" className="rounded-circle z-depth-1 img-fluid testimonial-img" />
              <h3>Shirley Fultz</h3>
              <h4>Designer 	&nbsp;
                   <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" className="linkedin">
                  <Icofont icon="icofont-linkedin" />
                </a>
              </h4>

            </div>


            {/* card3  */}

            <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
              <p>
                <Icofont icon="quote-left" className="quote-icon-left" />
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site

                   It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site
                   <Icofont icon="quote-right" className="quote-icon-right" />
              </p>

              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1 img-fluid" className="rounded-circle z-depth-1 img-fluid testimonial-img" />
              <h3>Shirley Fultz</h3>
              <h4>Designer 	&nbsp;
                   <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" className="linkedin">
                  <Icofont icon="icofont-linkedin" />
                </a>
              </h4>

            </div>
          </div>
          {/* end of row */}


        </Carousel>



      </div>

    </div>
  )
}

export default Testimonials







{/* <div >

  <div className="myCarousel" className="row">
---card1
    <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" className="rounded-circle z-depth-1 img-fluid" />


      <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
      <p className="text-uppercase blue-text">Graphic designer</p>
      <p className="grey-text">
        It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site</p>
    </div>

---card2
    <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" className="rounded-circle z-depth-1 img-fluid" />
      <h3>Shirley Fultz</h3>
      <h4>Designer</h4>
      <p>
        It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site</p>
    </div>

  ---card3
    <div lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
      <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" className="rounded-circle z-depth-1 img-fluid" />
      <h3>Shirley Fultz</h3>
      <h4>Designer</h4>
      <p>
        It's freeing to be able to catch up on customized news and not be
                  distracted by a social media element on the same site</p>
    </div>
    end of row 
  </div> */}

