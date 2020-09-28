import React, { useState } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";


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

  return (
    <div className="testimonials container">

      <div className="section-title">
        <h2>Testimonials</h2>
        <p>
          <Icofont icon="quote-left" className="quote-icon-left" />
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <Icofont icon="quote-right" className="quote-icon-right" />
        </p>
      </div>
      <div className="owl-carousel testimonials-carousel">
        <MDBCard className="my-5 px-5 pb-5 text-center">

          <MDBCarousel
            activeItem={1}
            length={2}
            slide={true}
            showControls={true}
            multiItem
            testimonial
          >

            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBRow>

                  <MDBCol lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                    <p className="text-uppercase blue-text">Graphic designer</p>
                    <p className="grey-text">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci sed quia non numquam modi tempora eius.</p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="twitter" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" />
                      </a>
                    </ul>
                  </MDBCol>

                  {/* card sample 2 */}
                  <MDBCol lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
                    <p className="text-uppercase blue-text">Web Developer</p>
                    <p className="grey-text">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      ipsa accusantium doloremque rem laudantium totam aperiam</p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" />
                      </a>
                    </ul>
                  </MDBCol>

                  {/* card sample 3 */}
                  <MDBCol lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                    <p className="text-uppercase blue-text">Photographer</p>
                    <p className="grey-text">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="dribbble" className="blue-text" />
                      </a>
                    </ul>
                  </MDBCol>

                </MDBRow>
              </MDBCarouselItem>
              {/* end of slide 1 */}

              <MDBCarouselItem itemId="2">
                <MDBRow>

                  <MDBCol lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
                    <img
                      src={climb}
                      className="rounded-circle z-depth-1 img-fluid resizeImage"
                      alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                    <p className="text-uppercase blue-text">Graphic designer</p>
                    <p className="grey-text">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci sed quia non numquam modi tempora eius.</p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="twitter" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" />
                      </a>
                    </ul>
                  </MDBCol>

                  {/* card sample 2 */}
                  <MDBCol lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
                    <p className="text-uppercase blue-text">Web Developer</p>
                    <p className="grey-text">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      ipsa accusantium doloremque rem laudantium totam aperiam</p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" />
                      </a>
                    </ul>
                  </MDBCol>

                  {/* card sample 3 */}
                  <MDBCol lg="4" md="5" className="mb-lg-0 mb-5 col-lg-4 col-md-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />
                    <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                    <p className="text-uppercase blue-text">Photographer</p>
                    <p className="grey-text">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa
                      qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="dribbble" className="blue-text" />
                      </a>
                    </ul>
                  </MDBCol>

                </MDBRow>
              </MDBCarouselItem>
              {/* end of slide 2 */}

            </MDBCarouselInner>
          </MDBCarousel>
        </MDBCard>

      </div>

    </div >
  )
}

export default Testimonials
