import React from 'react'
import './Banner.css'

let bannerData = {
    title: "React Landing Page",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate voluptatibus rem reiciendis quasi rerum, omnis a ipsam provident, earum quaerat quas illo iure et optio veritatis recusandae fugiat nisi."


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
                            <a href="#" className="banner-btn">Learn more</a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner