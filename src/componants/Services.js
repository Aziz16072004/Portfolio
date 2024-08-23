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

            <div className="serviceItem" data-aos="zoom-out-down">
                <div className="serviceImg">
                    <img src={softwareImg}/>
                </div>
                <h4>Web Development</h4>
                <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur</p>
            </div>
            <div className="serviceItem" data-aos="zoom-out-down">
                <div className="serviceImg">
                    <img src={design}/>
                </div>
                <h4>Multi Media</h4>
                <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur</p>
            </div>
            <div className="serviceItem" data-aos="zoom-out-down">
                <div className="serviceImg">
                    <img src={robot}/>
                </div>
                <h4>Robotic</h4>
                <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur</p>
            </div>
            <div className="serviceItem" data-aos="zoom-out-down">
                <div className="serviceImg">
                    <img src={developer}/>
                </div>
                <h4>Mobile Development</h4>
                <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur</p>
            </div>
            </div>
        </div>
    )
}
export default Services;