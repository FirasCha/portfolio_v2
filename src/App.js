import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import NotFound from './component/Notfound/Notfound';
import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import Contact from './component/contact/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './component/nav/Nav';
import About from './component/about/About';
import "./style.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/Notfound' element={<NotFound/>}></Route>
        </Routes>
        <Nav/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
