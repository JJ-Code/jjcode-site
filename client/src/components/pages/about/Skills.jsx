import React, {useEffect} from 'react';
import { chunkArray } from "../../../utilities/helperFX";
import Icofont from 'react-icofont';
import ListIcofont from "./aboutLayouts/SkillsIcofont";
import { v4 as uuid } from 'uuid';
import SkillsIcofont from './aboutLayouts/SkillsIcofont';

const Skills = () => {
  const skillsDataObj = [{
    skillType: "HTML",
    value: "100%"
  },
    {
      skillType: "CSS",
      value: "90%"
    },
    {
      skillType: "Javascript",
      value: "80%"
    },
    {
      skillType: "Product2",
      value: "100%"
    },
    {
      skillType: "Marketing",
      value: "85%"
    },
    {
      skillType: "Product",
      value: "100%"
    }
  ]
  let half = chunkArray(skillsDataObj, 3)

  console.log(half)

  return (
  
    <div className="skills container">

      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">

        {half.map((currArr) => {
          return currArr.map((curr) => {
            return <SkillsIcofont skill={curr.skillType} value={curr.value} key={uuid()} />
          })
        })}
  
          {/* {half[0].map((curr) => {
          return <SkillsIcofont skill={curr.skillType} value={curr.value} key={uuid()}/>
          })}
          

          {half[1].map((curr) => {
            return <SkillsIcofont skill={curr.skillType} value={curr.value} key={uuid()} />
          })} */}

     
      </div>

    </div>
  )
}

export default Skills
