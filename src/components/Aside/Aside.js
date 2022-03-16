import React from 'react';
// Components
import CryptoTableCoins from '../CryptoTableCoins/CryptoTableCoins';
// Styles
import '../../styles/styles.scss';

const Aside = ({coins}) => {
  return (
    <aside className='aside'>
      <CryptoTableCoins coins={coins}/>
    </aside>
  )
}

export default Aside;