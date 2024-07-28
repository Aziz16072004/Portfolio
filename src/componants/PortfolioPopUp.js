import { Carousel } from "./Carousel";

import slidesData  from "../data/carouselData.json";

const PortfolioPopUp=(props)=>{
    
      
     

    return props.showPopUp && (
        <div className="popUpContainer">

        <div className="popUp">
            <div>

            <h1>Project name :{props.popUp.name}</h1>
            <button onClick={()=>{props.setShowPopUp(false)}} className="close">  <ion-icon name="close-outline"></ion-icon></button>
            <div>
            <Carousel data={props.popUp.img} />
            
            </div>
            <a className="visit" href={props.popUp.link} target="_blank">Visit <ion-icon name="arrow-forward-outline"></ion-icon></a>
            </div>
            
        </div>
        </div>
    )
}
export default PortfolioPopUp