import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import HeroMain from './components/Hero/HeroMain';
import PortfolioMain from './components/Portfolio/PortfolioMain';
const App = () => {
  return (
    <div className='App'>
      <div className='app-container'>
        <Navbar />
        <HeroMain />
        <PortfolioMain />
        <Footer />
      </div>
    </div>
  );
};

export default App;
