import { useEffect, useState } from 'react';
import PortfolioPopUp from './PortfolioPopUp';
import 'aos/dist/aos.css'
import Aos from 'aos'
import data from "../data/data.json";
import img1 from '../imgs/img1.jpg';
import img2 from '../imgs/img2.jpg';
import img3 from '../imgs/img3.jpg';
import cap1 from '../imgs/cap1.png';
import cap2 from '../imgs/cap2.png';
import cap3 from '../imgs/cap3.png';
import donate1 from '../imgs/donate1.png';
import donate2 from '../imgs/donate2.png';
import donate3 from '../imgs/donate3.png';
import donate4 from '../imgs/donate4.png';
import hamina1 from '../imgs/hamina1.png';
import hamina2 from '../imgs/hamina2.png';
import hamina3 from '../imgs/hamina3.png';
import hamina4 from '../imgs/hamina4.png';
import hamina5 from '../imgs/hamina5.png';
import ecommerce1 from '../imgs/ecommerce1.png';
import ecommerce2 from '../imgs/ecommerce2.png';
import ecommerce3 from '../imgs/ecommerce3.png';
import ecommerce4 from '../imgs/ecommerce4.png';
import ecommerce5 from '../imgs/ecommerce5.png';
import ecommerce6 from '../imgs/ecommerce6.png';
import ecommerce7 from '../imgs/ecommerce7.png';
import ecommerce8 from '../imgs/ecommerce8.png';
import ecommerce9 from '../imgs/ecommerce9.png';
import ecommerce10 from '../imgs/ecommerce10.png';
import Lines from './Lines';
const imageMap = {
  img1,
  img2,
  img3,
  cap1,
  cap2,
  cap3,
  donate1,
  donate2,
  donate3,
  donate4,
  hamina1,
  hamina2,
  hamina3,
  hamina4,
  hamina5,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  ecommerce5,
  ecommerce6,
  ecommerce7,
  ecommerce8,
  ecommerce9,
  ecommerce10,
};

const Portfolio = () => {

  const [items, setItems] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUp, setPopUp] = useState(null);
  const [nbSlice, setNbSlice] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    Aos.init({duration:300})

  }, []);
  useEffect(() => {
    const projectsWithImages = data.projects.map(project => ({
      ...project,
      img: project.img.map(imgName => imageMap[imgName])
    }));
    setItems(projectsWithImages);
    
  }, []);
  
  const filteredProjects = selectedCategory === 'all'
    ? items.slice(0, nbSlice)
    : items.filter(project => project.category === selectedCategory).slice(0, nbSlice);

  return (
    <div className="portfolio container" id='portfolio'>
       <div className="sectionStart">
                <h3>MY PORTFOLIO</h3>
                <Lines/>
        </div>
      
      <h1>Recent Works</h1>
      <div className="portfolioFeature">
        <button
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'activeBtn' : ''}
        >
          All Projects
        </button>
        <button
          onClick={() => setSelectedCategory('webapp')}
          className={selectedCategory === 'webapp' ? 'activeBtn' : ''}
        >
          Web App
        </button>
        <button
          onClick={() => setSelectedCategory('ardouinoapp')}
          className={selectedCategory === 'ardouinoapp' ? 'activeBtn' : ''}
        >
          Ardouino App
        </button>
        <button
          onClick={() => setSelectedCategory('designapp')}
          className={selectedCategory === 'designapp' ? 'activeBtn' : ''}
        >
          Design App
        </button>
      </div>
      <div className="portfolioImages">
        {filteredProjects.map((ele, index) => (
          <div className='Portfoliocard' key={index} data-aos="fade-up">
            <img src={ele.img[0]} alt='' />
            <button onClick={() => { setShowPopUp(true); setPopUp(ele); }}>Show more</button>
          </div>
        ))}
      </div>
      {items.length > 6 && items.length > nbSlice ? (
        <button className="showMore" onClick={() => setNbSlice(nbSlice + nbSlice)}>Show more</button>
      ) : null}
      {popUp && (
        <PortfolioPopUp popUp={popUp} showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
      )}
    </div>
  );
};

export default Portfolio;
