import './App.css';
import Auctions from './components/Auctions';
import Header from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Master from './components/modal/Master';
import Details from './components/modal/Details';
import StockFile from './components/modal/StockFile';


function App() {
  return (
    <div className="App">

      <Header />
      <Auctions />

    </div>
  );
}

export default App;
