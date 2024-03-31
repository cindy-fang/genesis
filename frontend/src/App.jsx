import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './dashboard/components/Layout';
import Home from './Home';
import Garden from './dashboard/components/Garden';
import GlobalStyle from './GlobalStyle'; // Import the GlobalStyle component

const App = () => {
    return (
        <>
            <GlobalStyle /> 
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='Garden' element={<Garden />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
