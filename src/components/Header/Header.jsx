import { Button } from "@material-tailwind/react";
import React from "react";
import styles from '../Header/Header.module.scss';

const Header = () => {
    return ( 
    <header className={styles.header}>
        <div className="">
            <img src='https://github.com/AceSet/My-app/blob/main/src/Logg/Logo.png?raw=true' alt=' '></img>
            <div className="">   
                <p>Это мой первый проект</p>
            </div>
        </div>
    </header>
)}

export default Header;