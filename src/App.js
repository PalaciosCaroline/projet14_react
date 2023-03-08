
import './App.css';
import React from 'react'
import Home from './pages/Home'
import NewEmployee from './pages/NewEmployee';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ListEmployees from './pages/ListEmployees';
import { initializeLocalStorage } from "./mock/data";

export default function App() {
  
  initializeLocalStorage();

return(
    <BrowserRouter>
      <div className='box_app'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/newemployee" element={<NewEmployee />} />
          <Route path="/listemployees" element={<ListEmployees />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
