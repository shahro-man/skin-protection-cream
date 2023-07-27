import React from "react";
import './Hero.css'
import {RiShoppingBagFill} from 'react-icons/ri'
import HeroImg from'../../assets/hero.png'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const text = "Trendy Collection"
const transition ={duration:3,type:"spring"}
const Hero=()=>{
    return(
        <div className="hero-container">
            <div className="hero-side">
                <span className="text1">skin protection cream</span>

                <div className="text2">
                    <span>{text}</span>
                    <span>
                        {" "}
                        Seedily say has sutible disposal and boy. Exercise joy man children 
                        rejoiced.


                    </span>
                </div>
            </div>


            <div className="hero-warper">
                <motion.div 
                initial ={{bottom:"2rem"}}
                whileInView={{bottom:"0rem"}}
                transition={transition}

                className="blue-circle"></motion.div>
                <motion.img
                initial={{bottom:"-2rem"}}
                whileInView={{bottom:"0rem"}}

                transition={transition}
                src={HeroImg} width={600}></motion.img>
                <motion.div
                transition={transition}
                initial={{right:"4%"}}
                whileInView={{right:"2%"}}
                className="cart2">
                    <RiShoppingBagFill></RiShoppingBagFill>
                    <div className="signup">
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight></BsArrowRight>
                        </div>
                    </div>
                </motion.div>
            </div>












            <div className="hero-side">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Montly Traffic</span>
                </div>

                <div className="customers">
                    <span>100k</span>
                    <span>Happy customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero