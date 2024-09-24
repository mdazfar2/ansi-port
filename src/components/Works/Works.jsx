import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from "react";



const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="Works">
            <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands & Clients </span>
            <spane>
                Lorem ispum is simpley dummy text of printing of printing Lorem
                <br />
                ispum is simpley dummy text of printing 
                <br />
                ispum is simpley dummy text of printing text of printing
                <br />
                Lorem ispum is simpley dummy text
            </spane>
            <button className="button s-button"> Hire me </button>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>

        {/* right side */}
            <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                  <img src={Amazon} alt="" />
                </div>{" "}
                <div className="w-secCircle">
                  <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                </div>
                </div>   
                {/* background circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};
export default Works;