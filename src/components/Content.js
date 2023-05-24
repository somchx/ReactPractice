import React, { useEffect } from 'react'
import './Content.css'
import Aos from "aos";
import "aos/dist/aos.css";
import estext from "./estext.png";
import firebox from "./firebox.png";
import xray from "./xray.png";
import { FaLaptopCode } from "react-icons/fa";
const Content = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="content" id="Content">
            <div className="topic">
                <h2><FaLaptopCode/> Projects Made</h2>
            </div>
            <div className="container">
                <section data-aos="fade-left" className="content-con">
                    <div className="content-l">
                        <img src={estext} alt="" />
                    </div>
                    <div className="content-r">
                        <h2>Estext Wep Application</h2>
                        <li>ESText is an environmental sound classification web application by machine learning.</li>
                        <li>Developed with a team as a graduation project.</li>
                        <li>Plan and design with Figma.</li>
                        <li>A web application built with the Angular  framework and deployed on Vercel.</li>
                        {/* <li>Create an API using Python and Flask  framework running on localhost.</li>
                    <li>This project was described in the conference paper presented at the AJCC 2023 
                        and selected for the journal ICIC Express Letters Part B (indexed by Scopus Q3).</li> */}
                        <a href="https://es-text-somchx.vercel.app/Home" className="blue-button">Visit Site</a>
                    </div>
                </section>
                <section data-aos="fade-right" className="content-con">
                    <div className="content-r">
                        <h2>FireBox Game</h2>
                        <li>Developed individually as an assignment in a game design and development class.</li>
                        <li>A game built with Unity and deployed on simmer.io.</li>
                        <a href="https://simmer.io/@somchx/firebox" className="red-button">Visit Site</a>
                    </div>
                    <div className="content-l">
                        <img src={firebox} alt="" />
                    </div>
                </section>
                <section data-aos="fade-left" className="content-con">
                    <div className="content-l">
                        <img src={xray} alt="" />
                    </div>
                    <div className="content-r">
                        <h2>Prediction Chest X-Ray</h2>
                        <li>Developed with a team as an assignment in an artificial intelligence (AI) class.</li>
                        <li>Predict the chest X-ray that shows normal, pneumonia, COVID-19, or tuberculosis using Python in the Google Colab.</li>
                        <li>Using the CNN model, which uses techniques such as image preprocessing to resize or rotate the image.</li>
                        <a href="https://colab.research.google.com/drive/1qAf_EygIP1i5MV4CKLfBWSUhUNLnfo5L?usp=sharing" className="blue-button">Visit Site</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Content