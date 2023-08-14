import React from 'react'
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {/* <Outlet /> */}
      <div>HellowWorld</div>
      <Footer />
    </div>
  )
}

export default Layout