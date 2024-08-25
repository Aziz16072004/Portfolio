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
                        im a <span>developer</span> <br/> and programmer based in trunisia
                    </h1>
                    <Lines/>
                    <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre</p>
                </div>
                
            </div>
            

            <div className="homeImage">
            <div className="introImageWrapper">
                <img src={introImage} />
            </div>
                <img className="cercle" src={cercle}/>

           
            </div>
            <div className="socialMedia">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="logo-pinterest"></ion-icon>
            </div>
        </div>
    )
}
export default HomeSection