import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./ScrollToTop.css";
import { Link, animateScroll as scroll } from "react-scroll";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className="scroll">
      <Link
        to="home"
        smooth={true}
        duration={500}
        className={`${visible ? "block" : "none"} scrollIcon cursor-pointer`}
      >
        <FaChevronUp size={20} className="svg" />
      </Link>
    </div>
  );
}

export default ScrollToTop;
