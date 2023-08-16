import React from 'react'
import { Outlet } from 'react-router-dom';
import { Reset } from 'styled-reset';

import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import Header from '../Header/Header';


const Layout = () => {
  return (
    <div className={styles.layout}>
      <Reset />
      <Header />
      {/* <Outlet /> */}
      <div className='container'>Hello World</div>
      <Footer />
    </div>
  )
}

export default Layout