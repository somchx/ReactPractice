import React, { useEffect } from 'react'
import './Info.css'
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "./profile.jpg";
import { BsFillPersonFill } from "react-icons/bs";

const Info = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div className="Content" id="About">
            <div className="topic">
                
                <h2><BsFillPersonFill/> About Me</h2>
            </div>
            
            <div data-aos="flip-left" className="Container">
                
                <div  className="content-con">

                    <div className="Content-l">
                        <img src={profile} alt="" />
                    </div>
                    <div className="Content-r">
                        <h2>I'm Somchange</h2>
                        Computing Science
                        <p>
                        I just graduated with a bachelor's degree. 
                        I have always been self-driven to complete my project. 
                        I have knowledge of programming and web application development. 
                        I'm always love to learn new things and advance my knowledge.
                        </p>
                        <p>Email : somchangechananya@gmail.com</p>
                        <p>Place : Bangkok, Thailand</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info