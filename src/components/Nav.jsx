import React from "react";
import styles from './Nav.module.scss';

const Nav = () => {
    return ( 
        <nav className={styles.nav}>
        <div>
          <a>Toxeitov Asset CV</a>
        </div>
        <div>
          <a>Обо мне</a>
        </div>
        <div>
          <a>Мои Достижения</a>
        </div>
      </nav>
)}

export default Nav;