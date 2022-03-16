import React, { useState, useContext, useEffect } from 'react';
// Context
import { ListContext } from '../../context/ListContext';

const CryptoForm = ({coins}) => {

  const [list, setList] = useContext(ListContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  let purchasedCrypto = {
    name: '',
    price: '',
    amount: ''
  }

  // useEffect(() => {
    
  // }, [list])

  const handleName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
  }

  const handlePrice = (e) => {
    const currentPrice = e.target.value;
    setPrice(currentPrice);
  }

  const handleAmount = (e) => {
    const currentAmount = e.target.value;
    setAmount(currentAmount);
  }

  const setLocalStorage = (coins) => {
    localStorage.setItem('coins', JSON.stringify(coins));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones 
    if(name === '' || name === 'Choose your crypto' || name === 'none') {
      console.log('Todos los campos son obligatorios')
    } else {
      if(price === '' || price < 1) {
        console.log('Todos los campos son obligatorios')
      } else {
        if(amount === '' || amount < 1) {
          console.log('Todos los campos son obligatorios')
        } else {
          purchasedCrypto = {
            name: name,
            price: price,
            amount: amount
          }
      
          setList([...list, purchasedCrypto]);
          setLocalStorage(list);

          setName('');
          setPrice('');
          setAmount('');
        }
      }
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='coin'>Your Crypto</label>
          <select name='coin' id='coin' onChange={handleName} value={name}>
            <option value='none'>Choose your crypto</option>
            {
                coins.map(coin => (
                    <option key={coin.id} value={coin.id}>{coin.name}</option>
                ))
            }
          </select>
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input 
            name='price' 
            id='price'
            type='number'
            placeholder='Enter the price paid'
            onChange={handlePrice}
            value={price}
          />
        </div>
        <div>
          <label htmlFor='amount'>Amount</label>
          <input 
            name='amount' 
            id='amount'
            type='number'
            placeholder='Enter the amount purchased'
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button onClick={handleSubmit}>Add</button>
        <p>* The values entered must be in dollar currency</p>
        <div className='message'></div>
    </form>
  )
}

export default CryptoForm;