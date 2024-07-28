import introImage from "../imgs/profile_image-removebg-preview.png"

const HomeSection =()=>{
    return(
        <div className="home container" id="home">

            <div className="HomeContent">
                <h3>Hi , I am</h3>
                <h1>Chaabani Aziz</h1>
                <h3>Web Developer</h3>
                <p>It uses the media rule to include a block of CSS properties only if a certain condition is true.It uses the media rule to include a block of CSS properties only if a certain condition is true.</p>
                <div className="homeButtons">
                    <button className="btn1">Download CV</button>
                    <button className="btn2">Contact me</button>
                </div>
            </div>
            <div className="homeBanner">
                <div className="homeBannerItem">
                    <div className="iconBox">
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div>
                        <h2>8 Years Job</h2>
                        <h4>Experinece</h4>
                    </div>
                </div>
                <div className="homeBannerItem middleElement">
                    <div className="iconBox">
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div>
                        <h2>8 Years Job</h2>
                        <h4>Experinece</h4>
                    </div>
                </div>
                <div className="homeBannerItem">
                    <div className="iconBox">
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <div>
                        <h2>8 Years Job</h2>
                        <h4>Experinece</h4>
                    </div>
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