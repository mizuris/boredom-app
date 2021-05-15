import React, { useState } from "react";
import { motion } from "framer-motion";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import Guide from "../Guide/Guide";

function Activity({ activity }) {
  const [showGuide, setShowGuide] = useState(false);
  const closeGuide = () => setShowGuide(false);

  return (
    <main className={`activity ${showGuide ? "bg-light" : ""}`}>
      <div className="guide-icon">
        {showGuide ? (
          <IoIcons.IoMdCloseCircle
            className="close-icon"
            onClick={() => setShowGuide(false)}
          />
        ) : (
          <FaIcons.FaInfoCircle onClick={() => setShowGuide(true)} />
        )}
      </div>
      {showGuide ? (
        <Guide guideClosingHandler={closeGuide} />
      ) : (
        <motion.div
          className="activity-content"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
        >
          <div className="activity-heading">
            <h2>{activity.activity}</h2>
            <p>{activity.type}</p>
          </div>
          <div className="activity-misc">
            <div>
              <IoIcons.IoIosPeople className="activity-icon" />
              {activity.participants}
            </div>
            <div>
              <RiIcons.RiMoneyEuroCircleFill className="activity-icon" />
              {activity.price}
            </div>
            <div>
              <RiIcons.RiLineChartFill className="activity-icon" />
              {activity.accessibility}
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}

export default Activity;
