import React from 'react'
import "./AboutUs.css"
function AboutUs() {
    return (
        <div className="AboutContainer">
           
            <div className="container">
                <div className="content"> 
                <div><div className="heading">Welcome Aboard</div>
                <div>
                <p>We thought we'd have a </p>
                <p>different approach to </p>
                <p>navigating you around  </p>
                <p>to give you a wider </p>
                <p>perspective that we can</p>
                <p>be a li'l more <a href="https://www.liaisonit.com/thisishome" id="button">welcoming</a> .</p>
            </div></div> 
                
        
            </div>
            <div className="right">
                <div><p id="name">LIAISON<sup>IT</sup></p>
                <p id="sub">building your <span style={{fontWeight:'800'}}>captive</span> </p>
                <p id="quote">iNSPIRE iDEATE iMPLEMENT</p></div>
                <button><a href="https://www.liaisonit.com/thisishome">Welcome</a></button>
            </div>
            </div>
            
           
        </div>
    )
}

export default AboutUs
