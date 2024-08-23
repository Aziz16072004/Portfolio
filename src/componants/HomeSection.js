import introImage from "../imgs/profile_image-removebg-preview.png"
import Lines from "./Lines"

const HomeSection =()=>{
    return(
        <div className="home container" id="home">

            <div className="HomeContent">
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
                <img src={introImage}/>

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