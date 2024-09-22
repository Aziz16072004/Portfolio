import introImage from "../imgs/profile_image-removebg-preview.png"
import cercle from "../imgs/cercle.png"
import Lines from "./Lines"
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from "react"

const HomeSection =()=>{
    useEffect(() => {
        Aos.init({duration:3000})
    }, []);
    return(
        <div className="home container" id="home" >

            <div className="HomeContent"    data-aos="fade-up">
                <div className="sectionStart">
                <h3>Hello , I'm Chaabani Aziz Web Developer</h3>
                <Lines/>

                </div>
                <div className="homeSectionStartIntroduction">
                    <h1>
                        im a <span>developer</span> <br/> and programmer based in tunisia
                    </h1>
                    <Lines/>
                    <p>I specialize in building efficient, scalable solutions and seamless user experiences.
Committed to writing clean, maintainable code, I stay up-to-date with the latest industry practices.
Driven by curiosity, I continuously explore new technologies to deliver innovative and impactful solutions.</p>
                </div>
                
            </div>
            

            <div className="homeImage">
            <div className="introImageWrapper">
                <img src={introImage} />
            </div>
                {/* <img className="cercle" src={cercle}/> */}

           
            </div>
            <div className="socialMedia">
            <a href="https://www.facebook.com/aziz.chaabani.357" ><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="" ><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="" ><ion-icon name="mail-outline"></ion-icon></a>
            <a href="" ><ion-icon name="logo-pinterest"></ion-icon></a>
            </div>
        </div>
    )
}
export default HomeSection