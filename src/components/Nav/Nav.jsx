import React from "react";
import styles from './Nav.module.scss';

const Nav = () => {
    return ( 
        <nav className={styles.nav}>
          <div  className={styles.inNav}>
            <div>
              <a>Toxeitov Asset CV</a>
            </div>
            <div>
              <a>Обо мне</a>
            </div>
            <div>
              <a>Мои Достижения</a>
            </div>
            <div>
              <a>Связь со мной</a>
            </div>
          </div>
      </nav>
)}

export default Nav;