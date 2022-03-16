import React from 'react';
// Components
import CryptoForm from '../components/CryptoForm/CryptoForm';
import CryptoList from '../components/CryptoList/CryptoList';
// Styles
import '../styles/styles.scss';

export const Home = ({coins}) => {
  return (
    <main className='home'>
        <CryptoForm coins={coins}/>
        <CryptoList />
    </main>
  )
}
