import React from 'react'
import './Banner.css'

let bannerData = {
    title: "Hi there 👋",
    desc: " Welcom to my World. I'm Chananya Aiamprakhon, and everyone who knows me calls me Som which means orange 🍊 in Thailand."


}

function Banner() {
    return (
        
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>
                            {bannerData.title}
                            <p>
                                {bannerData.desc}
                            </p>
                            <a href="#About" className="banner-btn">Get To Know Me</a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner