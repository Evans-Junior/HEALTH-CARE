import React from 'react'
import "./Slides.css";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Image1 from './assets/becky.jpg'
import Image2 from './assets/chriss.jpg'
import Image3 from './assets/jeff.jpg'
import Image4 from './assets/phil.jpg'
import Image5 from './assets/princess.jpg'
import Image6 from './assets/sam.jpg'


function Slides() {
    return (
        <div className="slides">
            <br/>
            <h3>Doctors of the week</h3>
            <AliceCarousel className="__carousel" autoPlay autoPlayInterval="2000"  fadeOutAnimation={true}
            mouseTrackingEnabled={true}>
                <img src={Image1} className="sliderimg /&text=slide1" alt=""/>
                <img src={Image2} className="sliderimg" alt=""/>
                <img src={Image3} className="sliderimg" alt=""/>
                <img src={Image4} className="sliderimg" alt=""/>
                <img src={Image5} className="sliderimg" alt=""/>
                <img src={Image6} className="sliderimg" alt=""/>
            </AliceCarousel>
        </div>
    )
}

export default Slides
