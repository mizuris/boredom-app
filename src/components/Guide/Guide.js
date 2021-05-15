import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

function Guide() {
  const [showGuide, setShowGuide] = useState(false);
  return (
    <div className="guide">
      <div className="guide-icon" onClick={() => setShowGuide(true)}>
        <FaIcons.FaInfoCircle />
      </div>
      {showGuide ? (
        <div className="guide-content">
          <div className="guide-icon" onClick={() => setShowGuide(false)}>
            <IoIcons.IoMdCloseCircle />
          </div>
          <div className="guide-inner">
            <h3>Icons meaning</h3>
            <ul>
              <li>
                <IoIcons.IoIosPeople /> - number of participants needed to take
                part in given event.
              </li>
              <li>
                <RiIcons.RiMoneyEuroCircleFill /> - price range from 0 to 1,
                defining if event is free (0) or expensive (1).
              </li>
              <li>
                <RiIcons.RiLineChartFill /> - event accessibility range from 0
                to 1. Higher the number, easier to fulfill given event.
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Guide;
