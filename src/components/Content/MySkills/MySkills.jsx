import { Button } from "@material-tailwind/react";
import React from "react";
import styles from './MySkills.module.scss';

const MySkills = () => {
    return (
        <div>
            My Skills
        <div className={styles.SKills}>
            <Button className={styles.firstButton}>
            </Button>
            <Button className={styles.secondButton}> </Button>
            <Button className={styles.thirdButton}> </Button>
            <Button className={styles.fourthButton}> </Button>
            <Button className={styles.fivesButton}> </Button>
            <Button className={styles.sixButton}> </Button> 
        </div>
        </div>
)}


export default MySkills;