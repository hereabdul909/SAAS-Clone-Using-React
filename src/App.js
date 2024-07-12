import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Benefits from './Components/Sections/Benefits';
import BlackFluid from './Components/Sections/BlackFluid';
import Expert from './Components/Sections/Experts/Expert';
import MovingImg from './Components/Sections/MovingImg';
import Overview from './Components/Sections/Overview';
import Providers from './Components/Sections/Providers';
import Questions from './Components/Sections/Questions';
import Services from './Components/Sections/Service/Services';
import ThreeBanners from './Components/Sections/ThreeBanners/ThreeBanners';

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Overview/>
     <Providers/>
     <Services/>
     <Expert/>
     <MovingImg/>
     <BlackFluid/>
     <Benefits/>
     <Questions/>
     <ThreeBanners/>
     <Footer/>
    </>
  );
}

export default App;
