import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App