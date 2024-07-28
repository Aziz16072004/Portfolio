import { useEffect, useState } from 'react';
import PortfolioPopUp from './PortfolioPopUp';
import data from "../data/data.json";
import img1 from '../imgs/img1.jpg';
import img2 from '../imgs/img2.jpg';
import img3 from '../imgs/img3.jpg';
import cap1 from '../imgs/cap1.png';
import cap2 from '../imgs/cap2.png';
import cap3 from '../imgs/cap3.png';

const imageMap = {
  img1,
  img2,
  img3,
  cap1,
  cap2,
  cap3
};

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUp, setPopUp] = useState(null);
  const [nbSlice, setNbSlice] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Map image strings to actual image imports
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
      <h4>My Portfolio</h4>
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
          <div className='Portfoliocard' key={index}>
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
