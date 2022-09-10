import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoFound from './components/NoFound/NoFound';
import CountryDetails from './components/CoutryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<NoFound/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/country/:countryName" element={<CountryDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
