import React from "react";
import './Virtual.css'
import Shade from '../../assets/shade.png'
import RreactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual=()=>{
    return(
        <div className="virtual">
            <div className="left-side">
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again!</span>
                <span>Try Now!</span>
                <img src={Shade} alt="" />
            </div>
            <div className="right-side">
                <div className="wraper">
                    <RreactCompareImage
                    leftImage={Before}
                    rightImage={After}
                    ></RreactCompareImage>
                </div>

            </div>
        </div>

    )
}
export default Virtual