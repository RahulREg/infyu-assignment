import logo from './logo.svg';
import './App.css';
import './Footer/footer.css';
import { Navbar } from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css'
import { Footer } from './Footer/Footer';

import Header from './components/Header/Header';
import './components/Header/Header.css'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
