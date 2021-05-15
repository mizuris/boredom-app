import React from "react";
import { motion } from "framer-motion";
// import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

function Guide() {
  return (
    <motion.div
      className="guide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="guide-content">
        <div className="guide-inner">
          <h2>Icons meaning</h2>
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
              <RiIcons.RiLineChartFill /> - event accessibility range from 0 to
              1. Higher the number, easier to fulfill given event.
            </li>
          </ul>
          <div className="guide-slogan">
            <p>Find yourself suitable activity.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Guide;
