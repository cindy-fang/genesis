import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Garden from './components/Garden';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='garden' element={<Garden />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App