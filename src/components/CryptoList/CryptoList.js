import React, { useContext, useState, useEffect } from 'react';
// Context
import { ListContext } from '../../context/ListContext';
// Components
import CryptoListItem from '../CryptoListItem/CryptoListItem';
// Axios
import axios from 'axios';

const CryptoList = () => {

  const [list] = useContext(ListContext);

  const [coins, setCoins] = useState([]);

  const getData = async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
      console.log(res.data);
      setCoins(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  console.log(coins)

  return (
    <div className='list-scroll'>
      <table className='crypto-list'>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Bought at</th>
                <th>Amount</th>
                <th>Current Price</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
          {
            list.map(item => (<CryptoListItem 
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                amount={item.amount}
                                props={coins.filter((coin => coin.id === item.name))}
                              />))
          }
        </tbody>
      </table>
    </div>
  )
}

export default CryptoList;