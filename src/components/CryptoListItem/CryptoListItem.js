import React from 'react';

const CryptoListItem = ({name, price, amount, props}) => {
    console.log(props)
  return (
    <tr className='list-item'>
        <td>
            <img src={props[0].image} alt={`${props[0].name} logo`}/>
        </td>
        <td>{props[0].name}</td>
        <td>{props[0].symbol}</td>
        <td>{price}</td>
        <td>{amount}</td>
        <td>{props[0].current_price}</td>
        <td>{(props[0].current_price - price).toFixed(2)}</td>
        {/* <td>
            <button>X</button>
        </td> */}
    </tr>
  )
}

export default CryptoListItem;