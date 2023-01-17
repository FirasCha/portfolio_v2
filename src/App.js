import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Home from './component/home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Nav/>
    </div>
  );
}

export default App;
