
import './App.css';
import React from 'react'
import ChoiceServices from './pages/ChoiceServices'
import NewEmployee from './pages/NewEmployee';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ListEmployees from './pages/ListEmployees';

export default function App() {
return(
    <BrowserRouter>
      <main className='main_app'>
        <Routes>
          <Route index path="/" element={<ChoiceServices />} />
          <Route path="/newemployee" element={<NewEmployee />} />
          <Route path="/listemployees" element={<ListEmployees />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
