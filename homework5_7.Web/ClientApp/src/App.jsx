import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Orders from './Pages/Orders';
import OneOrder from './Pages/OneOrder';
import Success from './Pages/Success';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/oneorder/:id' element={<OneOrder />} />
                <Route path='/success' element={<Success />} />
            </Routes>
        </Layout>
    );
}

export default App;