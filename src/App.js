import NavBar from './componants/Navbar';
import './App.css';
import HomeSection from './componants/HomeSection';
import Skills from './componants/Skills';
import Portfolio from './componants/Portfolio';
import Services from './componants/Services';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeSection/>
      <Skills/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
