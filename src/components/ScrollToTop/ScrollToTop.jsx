import React, {useState} from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './ScrollToTop.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", ()=> {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  })
  return (
    <div className='scroll'>
      <a href="#" className={`${visible ? "block" : "none" } scrollIcon`}>
        <FaChevronUp size={30} className='svg' />
      </a>
    </div>
  )
}

export default ScrollToTop