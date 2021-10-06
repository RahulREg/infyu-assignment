// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import Header from './components/Header/Header';
import './components/Header/Header.css'
import Search from './components/Search/Search'
import './components/Search/Search.css'
import Hero from './components/Hero/Hero'
import './components/Hero/Hero.css'
import { Footer } from './components/Footer/Footer';
import './components/Footer/footer.css';
import Pictures from './components/Pictures/Pictures';
import './components/Pictures/Pictures.css';
import Product from './components/Product/Product';
import './components/Product/Product.css';
import Cards from './components/Card/Cards';
import './components/Card/Cards.css';
import CountDown from './components/CountDown/CountDown';
import './components/CountDown/CountDown.css';
import Newsletter from './components/Newsletter/Newsletter';
import './components/Newsletter/Newsletter.css';
import SpecialProduct from './components/SpecialProduct/SpecialProduct';
import './components/SpecialProduct/SpecialProduct.css';
import ClientReview from './components/ClientReview/ClientReview';
import './components/ClientReview/ClientReview.css';
import News from './components/News/News';
import './components/News/News.css';
import EndIcons from './components/EndIcons/EndIcons';
import './components/EndIcons/EndIcons.css';
import Floater from './components/Floater/Floater';
import './components/Floater/Floater.css';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Hero />
      <Pictures />
      <Product />
      <Cards />
      <CountDown />
      <SpecialProduct />
      <ClientReview />
      <News />
      <Newsletter />
      <EndIcons />
      <Floater />
      <Footer />
    </>
  );
}

export default App;
