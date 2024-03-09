
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Collection from './components/Collection';
import Space from './components/Space';
import Browser from './components/Browers';
import Work from './components/Work';
import Email from './components/Email';
import Footer from './components/Footer';

function App() {
  return (
    <div className='text-[#333333] font-montserrat'>
        <Navbar/>
        <Hero/>
        <Banner/>
        <Collection/>
        <Space/>
        <Browser/>
        <div className='w-full h-[1px] bg-[#D7D6D6]'></div>
        <Work/>
        <Email/>
        <Footer/>
    </div>
  );
}

export default App;
