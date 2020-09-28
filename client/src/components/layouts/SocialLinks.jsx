import React from 'react';
import Icofont from 'react-icofont';


const SocialLinks = () => {
  return (

    <div className="social-links">

      {/* <a href="#" className="twitter">
        <Icofont icon="icofont-twitter" />
      </a> */}

      {/* <a href="#" className="facebook">
        <Icofont icon="icofont-facebook" />
      </a> */}

      {/* <a href="#" className="instagram">
        <Icofont icon="icofont-instagram" />
      </a> */}
      <a href="https://github.com/JJ-Code" className="google-plus" target="_blank" rel="noopener noreferrer" >
        <Icofont icon="icofont-github" />
      </a>
      <a href="https://www.linkedin.com/in/jaymee-liu" target="_blank" rel="noopener noreferrer" className="linkedin">
        <Icofont icon="icofont-linkedin" />
      </a>

    </div>
  )
}

export default SocialLinks
