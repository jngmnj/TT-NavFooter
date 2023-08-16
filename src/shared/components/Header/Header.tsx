import React from 'react';
import Search from './search/Search';
import NavUsers from './nav-users/NavUsers';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Nav from './nav/Nav';
import { classNames } from 'classnames/bind';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.hd_top}>
          <div className={styles.hd_left}>
            <Link to="/" className={styles.logo}>
              <div className={styles.img}>트래블투게더</div>
            </Link>
            <Search />
          </div>
          <NavUsers/>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;