import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";

export default function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}