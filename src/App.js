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
import { Footer } from './Footer/Footer';
import './Footer/footer.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Search />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
