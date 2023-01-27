import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import { Quotes } from './component/quotes/Quotes';
import NotFound from './component/Notfound/Notfound';
import Footer from './component/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Notfound' element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
