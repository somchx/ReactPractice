import React, { useEffect } from 'react'
import './Education.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

        <div className="Content" id="Education">
            <div className="topic">
                <h2><FaGraduationCap/> My Education</h2>
            </div>
            
            <div data-aos="flip-left" className="Container">
                
                <div  className="content-con">

                    <div className="Content-l">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Sanamchandra_05.jpg/1200px-Sanamchandra_05.jpg" alt="" />
                    </div>
                    <div className="Content-r">
                        <h2>Bachelor of Science in Computing Science</h2>
                        <p>
                            Silpakorn University (Nakhon Pathom, Thailand)
                        </p>
                        <p> Second Class Honors ✨ GPA : 3.50 Class of 2023
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education