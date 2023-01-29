import React from 'react'
import play from '../../Assets/play.png'
import './Products.css'

import { useState } from 'react';
import { motion } from 'framer-motion' 
import { productsData } from '../../data/productsData';

const Products = () => {
    const transition = { type: "spring", duration: 3}
    const [selected, setSelected] = useState(0);
    const tLength = productsData.length;
    return (
        <div className="products" id='products'>
          <div className="left-t">  
            <span>Ife</span>
            <span className='stroke-text'>Send Gifts</span>
            <span>easier, faster and be Happy</span>
            <motion.span
              key={selected}
              initial={{opacity: 0, x: -100}}
              transition={{...transition, duration: 2}}
              whileInView={{opacity: 1, x: 0}}
            >
              {productsData[selected].content}
            </motion.span>
            <span>
              <span>
              - {productsData[selected].designation}
              </span>
            </span>
          </div>
          <div className="right-t">
            <motion.div
              initial={{opacity: 0, x: -100}}
              transition={{...transition, duration: 2}}
              whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
              initial={{opacity: 0, x: 100}}
              transition={{ ...transition, duration: 2}}
              whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.img 
               key={selected}
              initial={{opacity: 0, x: 100}}
              transition={transition}
              animate={{opacity: 1, x:0}}
              exit={{opacity: 1, x: -100}}
            src={productsData[selected].image} alt="" />
            <div className="arrows">
              <img 
                onClick={() => {
                  selected === 0
                    ? setSelected(tLength - 1)
                    : setSelected((prev) => prev - 1);
                }}
                src={play} 
                className="leftArrow" 
                alt="" />
              <img 
                onClick={() => {
                  selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev +1)
                }}
                src={play} 
                alt="" />
            </div>
          </div>
        </div>
  )
}

export default Products