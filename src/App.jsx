/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-constructed-context-values */

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseContext from './context';
import Landing from './Pages/Landing/Landing';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Drinks from './Pages/Home/Home';

function App() {
  return (
    <UseContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </BrowserRouter>
    </UseContext.Provider>
  );
}

export default App;
