import React from 'react'
import { chunkArray } from "../../../utilities/helperFX";
import { v4 as uuid } from 'uuid';
import InterestIcofonts from "./aboutLayouts/InterestIcofonts";


const Interest = () => {
  const interestDataObj = [{
    icon: "brainstorming",
    title: "Lorem Ipsum",
    color: "#ffbb2c"
  },
  {
    icon: "education",
    title: "Lorem Ipsum",
    color: "#5578ff"
  },
  {
    icon: "chart-bar-graph",
    title: "Lorem Ipsum",
    color: "#e80368"
  },
  {
    icon: "island-alt",
    title: "Lorem Ipsum",
    color: "#e361ff"
  }, {
    icon: "chart-histogram",
    title: "Lorem Ipsum",
    color: "#47aeff"
  },
  {
    icon: "search-stock",
    title: "Lorem Ipsum",
    color: "#ffa76e1"
  },
  {
    icon: "database",
    title: "Lorem Ipsum",
    color: "#11dbcf"
  },
  {
    icon: "news",
    title: "Lorem Ipsum",
    color: "#4233ff"
  },
  {
    icon: "runner-alt-1",
    title: "Lorem Ipsum",
    color: "#b2904f"
  }, {
    icon: "court",
    title: "Lorem Ipsum",
    color: "#b20969"
  },
  {
    icon: "iphone",
    title: "Lorem Ipsum",
    color: "#ff5828"
  },
  {
    icon: "court",
    title: "Lorem Ipsum",
    color: "#29cc6"
  }

  ]
  const splitDataArr = chunkArray(interestDataObj, 4)


  return (
    <div className="interests container">

      <div className="section-title">
        <h2>Interests</h2>
      </div>

      <div className="row">

        {splitDataArr.map((currArr) => {
          return currArr.map((curr) => {
            return <InterestIcofonts icon={curr.icon} title={curr.title} color={curr.color} key={uuid()} />
          })
        })}
      </div>


    </div>

  )
}

export default Interest;
