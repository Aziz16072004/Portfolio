import Lines from "./Lines";
import softwareImg from "../imgs/software-development.png";
import developer from "../imgs/developer.png";
import design from "../imgs/design.png";
import robot from "../imgs/robot.png";
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from "react";

function Services(){
    useEffect(() => {
        Aos.init({duration:2000})
    }, []);
    return(
        <div className="services" id="services">
             <div className="sectionStart">
                <h3>MY SERVICES</h3>
                <Lines/>
            </div>
            <h1>
                    What Can I DO?
            </h1>
            <div className="servicesContainer">

            <div className="serviceItem" data-aos="fade-up">
                <div className="serviceImg">
                    <img src={softwareImg}/>
                </div>
                <h4>Web Development</h4>
                <p>I offer professional web development services, creating responsive, user-friendly websites that meet your business needs. Whether it's a simple landing page or a complex web application, I build scalable, efficient solutions using modern technologies, ensuring high performance and a great user experience.</p>
            </div>
            
            <div className="serviceItem"  data-aos="fade-up">
                <div className="serviceImg">
                    <img src={robot}/>
                </div>
                <h4>Robotic</h4>
                <p>I provide robotics solutions tailored to automate and optimize processes, combining cutting-edge technology with innovative design. From prototyping to final deployment, I develop intelligent systems that improve efficiency, precision, and functionality in various applications.</p>
            </div>
           
            </div>
        </div>
    )
}
export default Services;