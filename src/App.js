
import './App.css';
import React from 'react'
import ChoiceServices from './pages/ChoiceServices'
import NewUser from './pages/NewUser';
import ListUsers from './pages/ListUsers';
import { BrowserRouter,Routes, Route} from "react-router-dom"

export default function App() {
return(
    <BrowserRouter>
      <main className='main_app'>
        <Routes>
          <Route index path="/" element={<ChoiceServices />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/listusers" element={<ListUsers />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
