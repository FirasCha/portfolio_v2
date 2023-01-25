import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import { Quotes } from './component/quotes/Quotes';

function App() {
  return (
    <div>
        <Header/>
        <Home/>
        <Quotes/>
        <Nav/>
    </div>
  );
}

export default App;
