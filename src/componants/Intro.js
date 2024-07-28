import introImage from "../imgs/introImage.jpg"

const Intro = ()=>{
    return(
        <div className="into" id="intro">
            <div className="imageContainer">

            <div className="introImage">
                    <img src={introImage} alt="img"/>
            </div>
            </div>
            <div className="intoContent">
                <h3>My intro</h3>
                <h1>About Me</h1>
                <p>Le Lorem Ipsum est simplement du faux texte employé est simplement du faux texte employé est simplement du faux texte employé  dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standars de mise en page de texte, comme Aldus PageMaker.</p>
                <div className="introInformation">
                    <p><ion-icon name="person-outline"></ion-icon> <label>  Name </label> <span>:</span> Aziz Chaabani</p>
                    <p><ion-icon name="call-outline"></ion-icon><label> Phone </label> <span>:</span> +212 50-551-63</p>
                    <p><ion-icon name="mail-outline"></ion-icon> <label> Email </label> <span>:</span> mouhamenwi@gmail.com</p>
                </div>
                
                <div className="myInterest">
                    <h3>My interests</h3>
                    <div>
                    <p><ion-icon name="musical-notes-outline"></ion-icon><label>Music</label></p>
                    <p><ion-icon name="videocam-outline"></ion-icon><label>Movie</label></p>
                    <p><ion-icon name="american-football-outline"></ion-icon><label> Sport</label></p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Intro