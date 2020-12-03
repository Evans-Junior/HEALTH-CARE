import React from 'react'
import "./Home.css"
import ReactPlayer from "react-player"
import Doctor from "./Doctor"
import Info from "./Info"
import Josh from "./assets/josh.jpg"
import Phil from "./assets/phil.jpg"
import Jeff from "./assets/jeff.jpg"
import Sam from "./assets/sam.jpg"

const name="Dr. Josh Tom"  
const Details="Has a dotorate as a Dentist.Had his doctorate degree in havard and has 15 year of experince on the job"
const name_a="Dr. Phil Botton"
const Details_a="Has a dotorate as a Dentist.Had his doctorate degree in havard and has 15 year of experince on the job"
const name_b="Dr. Sam Joseph"
const Details_b="Has a dotorate as a Dentist.Had his doctorate degree in havard and has 15 year of experince on the job"



 function Home() {
    return (
        <div className="home">
            <div className="container__home">
                <div className="flex">
                    <ReactPlayer url="https://www.youtube.com/watch?v=pORvET2575g" className="video"/>
                    <Info/>
                </div> 
                <div className="week">
                <br/>
                <br/>
                <br/>
                <br/>
                <h4 className="doc">Doctors of the week</h4>
                <br/>
                <div className="flex_1">
                    <Doctor img={Josh} name={name} Details={Details}/>
                    <Doctor img={Phil} name={name_a} Details={Details_a}/>
                    <Doctor img={Sam} name={name_b} Details={Details_b}/>
                   <Doctor img={Jeff} name={name_b} Details={Details_b}/>
                   <Doctor img={Sam} name={name_b} Details={Details_b}/>
                </div>
                </div>
                <div className="news">
                <Doctor/>
                </div>
              
                 {/* <Slides/> */}
                    {/* <News/> */}
            </div>
        </div>
    )
}

export default Home;
