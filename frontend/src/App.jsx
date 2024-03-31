import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './dashboard/components/Layout';
import Home from './Home';
import Dashboard from './dashboard/components/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path='dashboard' element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App