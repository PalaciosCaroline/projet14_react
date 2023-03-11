
import './App.css';
import React, {useEffect} from "react";
import Home from './pages/Home'
import NewEmployee from './pages/NewEmployee';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ListEmployees from './pages/ListEmployees';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from './store/employeesSlice';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the list of employees when the component mounts
    dispatch(fetchEmployees());
  }, []);
 
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
