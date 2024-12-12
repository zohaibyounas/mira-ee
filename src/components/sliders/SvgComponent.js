import * as React from "react";
import { motion, useAnimation } from "framer-motion";
const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition: { duration: 2 } },
};
const SvgComponent = (props) => (
  <div
    className="animated-div"
    // style={{
    //   border: "2px solid black",
    //   borderRadius: "50px",
    //   overflow: "hidden",
    // }}
  >
    {/* <img
      src="/assets/images/hero-pic-12.png"
      alt="Embedded system"
      // style={{ height: "25rem" }}
    /> */}
  </div>
);

export default SvgComponent;
