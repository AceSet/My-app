import React from "react";
import styles from './Header.module.scss';

const Header = () => {
    return ( 
    <header className={styles.header}>
        <div>
            <img className='border rounded-xl -m-1'src='./../Logg/Logo.png' alt=' '></img>
        </div>
    </header>
)}

export default Header;