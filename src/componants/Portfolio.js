import { useEffect, useState } from 'react';

import 'aos/dist/aos.css'
import Aos from 'aos'
import data from "../data/data.json";
import cap1 from '../imgs/cap1.png';
import donate1 from '../imgs/donate1.png';
import hamina1 from '../imgs/hamina1.png';
import ecommerce1 from '../imgs/ecommerce1.png';
import Lines from './Lines';
const imageMap = {
  cap1,
  donate1,
  hamina1,
  ecommerce1,
  ecommerce1,
};

const Portfolio = () => {
  useEffect(() => {
    Aos.init({duration:300})

  }, []);
  return (
    <div className="portfolio container" id='portfolio'>
       <div className="sectionStart">
                <h3>MY PORTFOLIO</h3>
                <Lines/>
        </div>
      
      <h1>Recent Works</h1>
      {data.projects.map((item)=>(

        <div className='projectItem'>
<div 
  className='status' 
  style={{ background: item.status === "completed" ? "#33b249" : "#ffc300" }}
>
  {item.status}
</div>          <img src={imageMap[item.img]}/>
        <div className='projectInformation'>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div className='projectTechnologies'>
            {item.technologies.map((ele)=>(
              <h3>{ele}</h3>

            ))}
            
          </div>
          <div className='projectFeature'>
            {item.link.codesrc && <a href={item.link.codesrc}>Code <ion-icon name="logo-github"></ion-icon></a>}
            {item.link.linksrc && <a href={item.link.linksrc}> Live Demo <ion-icon name="open-outline"></ion-icon></a>}

          </div>
        </div>
      </div>
      
      ))}
     
      
     
    </div>
  );
};

export default Portfolio;
