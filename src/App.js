import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import { Quotes } from './component/quotes/Quotes';
import NotFound from './component/Notfound/Notfound';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
        <Header/>
        <Home/>
        <Quotes/>
        <Nav/>
        <NotFound/>
        <Footer/>
    </div>
  );
}

export default App;
