import React, { useEffect, useContext, useState } from 'react';
// Axios
import axios from 'axios';
// Pages
import { Home } from './pages/Home';
// Components
import Aside from './components/Aside/Aside';
// React-router-dom 
import { Routes, Route } from 'react-router-dom';
// Context
import { ListProvider } from './context/ListContext';
// Styles
import './styles/styles.scss';

const CryptoApp = () => {

    const [coins, setCoins] = useState([]);

    const getData = async () => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
        console.log(res.data);
        setCoins(res.data);
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <div className='crypto-app'>
        <ListProvider>
            <Routes>
                <Route path='/' element={<Home coins={coins}/>}/>
            </Routes>
            <Aside coins={coins}/>
        </ListProvider>
    </div>
  )
}

export default CryptoApp;