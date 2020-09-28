import React from 'react';
import Icofont from 'react-icofont';
import { v4 as uuid } from 'uuid';
import climb from "../../../../images/climb.jpg";
import reksImage from "../../../../images/recs/rec-rekha.jpeg";


const TestimonialsIcofont = ({ comment, image, name, jobTitle, linkedinURL }) => {
  return (
    <div className="mb-lg-0 mb-5 col-lg-4 col-md-4" key={uuid()}>
      <p>
        <Icofont icon="quote-left" className="quote-icon-left" />
                {comment}
                   <Icofont icon="quote-right" className="quote-icon-right" />
      </p>

      <img src={image} className="resizeImage rounded-circle z-depth-1 img-fluid testimonial-img" />
      <h3>{name}</h3>
      <h4> {jobTitle} 	&nbsp;
                   <a href={linkedinURL} target="_blank" rel="noopener noreferrer" className="linkedin">
          <Icofont icon="icofont-linkedin" />
        </a>
      </h4>

    </div>

  )
}

export default TestimonialsIcofont
