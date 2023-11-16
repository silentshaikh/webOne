import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Services from './Services';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Error from './Error';
import BottomToTop from './BottomToTop';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    <BottomToTop/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
