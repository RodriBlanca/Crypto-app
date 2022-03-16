import React from 'react';
// Styles
import '../../styles/styles.scss';

const CryptoTableCoinsItem = ({name, price, symbol, image}) => {
  return (
    <tr className='table-body__item'>
        <td className='table-body__item--img'>
            <img src={image} alt={`${name} logo`}/>
        </td>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{price} US$</td>
    </tr>
  )
}

export default CryptoTableCoinsItem;