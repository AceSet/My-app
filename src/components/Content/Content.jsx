import React from "react";
import styles from './Content.module.scss';
import MySkills from "./MySkills/MySkills";

const Content = (props) => {
    return ( 
    <div className={styles.content}>
        {props.message}
        <div className={styles.inContent}>
        </div>
        <div>
        <MySkills />
        </div>
    </div>
)}

export default Content;