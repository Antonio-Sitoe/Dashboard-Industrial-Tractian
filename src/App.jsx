import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import Dashboard from './Components/Dashboad/Dashboard';
import Page404 from './Components/Page404/Page404';
import Login from './Components/Login/Login'
import {UserStorage} from './Context/UserContext'

function App() {
  return (
    <BrowserRouter>
    <UserStorage>
      <Routes>
        <Route path='/*' element={<Login/>} />
        <Route path='dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      <GlobalStyle />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
