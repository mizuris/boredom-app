import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import Guide from "../Guide/Guide";

function Activity({ activity }) {
  return (
    <main className="activity">
      <Guide />
      <div className="activity-heading">
        <h2>{activity.activity}</h2>
        <p>{activity.type}</p>
      </div>
      <div className="activity-misc">
        <div>
          <IoIcons.IoIosPeople className="icon" />
          {activity.participants}
        </div>
        <div>
          <RiIcons.RiMoneyEuroCircleFill className="icon" />
          {activity.price}
        </div>
        <div>
          <RiIcons.RiLineChartFill className="icon" />
          {activity.accessibility}
        </div>
      </div>
    </main>
  );
}

export default Activity;
