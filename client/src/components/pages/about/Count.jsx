import React from 'react';
import CountIcofont from "./aboutLayouts/CountIcofont";
import { v4 as uuid } from 'uuid';

const Count = () => {
  let countDataObj = [
    {
      icon: "icofont-simple-smile",
      counterUp: "232",
      title: "Happy Clients"
    },
    {
      icon: "icofont-document-folder",
      counterUp: "521",
      title: "Projects"
    },
    {
      icon: "icofont-live-support",
      counterUp: "5219",
      title: "Hours Of Support"
    },
    {
      icon: "icofont-users-alt-5",
      counterUp: "15",
      title: "Hard Workers"
    }

  ]
  return (
    <div className="counts container">

      <div className="row">
        {countDataObj.map((curr) => {
          return <CountIcofont icon={curr.icon} counterUp={curr.counterUp} title={curr.title} key={uuid()}/>
        })}

      </div>

    </div>
  )
}

export default Count
