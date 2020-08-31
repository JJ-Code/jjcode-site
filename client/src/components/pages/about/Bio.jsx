import React from 'react'
import climb from "../../../images/climb.jpg";
import Icofont from 'react-icofont';
import ListIcofont from "./aboutLayouts/ListIcofont";

const Bio = () => {

  const leftSideArr = [["Birthday:", "1 May 1995"], ["Website:", "www.example.com"], ["Birthday:", "1 May 1995"], ["Phone:", "+123 456 7890"], ["City : New York, USA"]];

  const rightSideArr = [["Age:", "5"], ["Degree:", "Master"], ["Birthday:", "1 May 1995"], ["PhEmailone:", "+123 456 7890"], ["Freelance:", "Available"]];

  return (
    <div className="about-me container">

      <div className="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={climb} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>UI/UX &amp; Graphic Designer</h3>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                {leftSideArr.map((curr) => {
                  return <ListIcofont strongStr={curr[0]} str={curr[1]} />
                })}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                {rightSideArr.map((curr) => {
                  return <ListIcofont strongStr={curr[0]} str={curr[1]} />
                })}
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Bio
