import NavBar from './componants/Navbar';
import './App.css';
import HomeSection from './componants/HomeSection';
import Intro from './componants/Intro';
import Portfolio from './componants/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeSection/>
      <Intro/>
      <Portfolio/>

    </div>
  );
}

export default App;
