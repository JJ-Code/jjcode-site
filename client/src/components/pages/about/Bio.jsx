import React from 'react'
import { chunkArray } from "../../../utilities/helperFX";
import climb from "../../../images/climb.jpg";
import ListIcofont from "./aboutLayouts/ListIcofont";
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';


const Bio = ({ aboutData: { summary } }) => {

  const aboutDataObj = [{
    dataType: "Birthday:",
    value: "1 May 1995"
  },
  {
    dataType: "Website:",
    value: "www.example.com"
  },
  {
    dataType: "Website:",
    value: "www.example.com"
  },
  {
    dataType: "Phone:",
    value: "www.example.com"
  }, {
    dataType: "City:",
    value: "New York, USA"
  }, {
    dataType: "Age:",
    value: "1 May 1995"
  },
  {
    dataType: "Degree:",
    value: "www.example.com"
  },
  {
    dataType: "Website:",
    value: "www.example.com"
  },
  {
    dataType: "Phone:",
    value: "www.example.com"
  }, {
    dataType: "Freelance:",
    value: "New York, USA"
  }];

  //array chunck should match the css class of column aka col-lg-6
  const half = chunkArray(aboutDataObj, 6)

  console.log(half);
  console.log(summary);
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
            {summary}
          </p>
          <div className="row">
            {/* half is a array of a array of object. Therefore 2 maps are needed to loop thru both arrays to cut down on markup*/}

            {half.map((currArr) => {
              return currArr.map((curr) => {
                return <ListIcofont strongStr={curr.dataType} str={curr.value} key={uuid()} />
              })
            })

            }
            {/* {half[0].map((curr) => {
                  return <ListIcofont strongStr={curr.dataType} str={curr.value} key={uuid()}/>
                })}
  
 
                {half[1].map((curr) => {
                  return <ListIcofont strongStr={curr.dataType} str={curr.value} key={uuid()} />
                })} */}

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


const mapStateToProps = state => ({
  aboutData: state.aboutData
});

export default connect(mapStateToProps, {})(Bio);
