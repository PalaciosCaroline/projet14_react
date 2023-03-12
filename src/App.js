
import './App.css';
import React, {useEffect} from "react";
import Home from './pages/Home'
import NewEmployee from './pages/NewEmployee';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import ListEmployees from './pages/ListEmployees';
import { initializeLocalStorage } from './utils/useLocalStorage';
import { fetchEmployees } from './store/employeesSlice';
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  // initializeLocalStorage();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
 
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
