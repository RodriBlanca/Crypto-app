import React from 'react';
// Components
import CryptoTableCoinsItem from '../CryptoTableCoinsItem/CryptoTableCoinsItem';
// Styles
import '../../styles/styles.scss';

const CryptoTableCoins = ({coins}) => {
  return (
    <div className='table-container'>
        <h2>Current Prices</h2>
        <table className='table'>
            
            <thead className='table-head'>
                <tr>
                    <th>{/* Imagen */}</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                {
                    coins.map(row => (
                        <CryptoTableCoinsItem 
                            key={row.id}
                            name={row.name}
                            price={row.current_price}
                            symbol={row.symbol}
                            image={row.image}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default CryptoTableCoins;