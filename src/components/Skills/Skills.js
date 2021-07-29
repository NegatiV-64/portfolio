import React from 'react';

import {
    SiHtml5, SiSass, SiCss3, SiJavascript, 
    SiBootstrap, SiMaterialUi, SiTailwindcss,
    SiReact, SiRedux, SiStyledComponents, SiReactrouter, SiJquery,
    SiNodeDotJs, SiPhp, SiWordpress, SiGit, SiMariadb
} from "react-icons/si";
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skills}>
            <div className={`container ${styles.skills__container}`}>
                <h2>Skills</h2>
                <div className={styles.skills__wrapper}>
                    <h5>Core</h5>
                    <ul className={styles.skills__list + " " + styles.skills__core}>
                        <li><SiHtml5 /></li>
                        <li><SiCss3 /></li>
                        <li><SiSass /></li>
                        <li><SiJavascript /></li>
                    </ul>
                </div>
                <div className={styles.skills__wrapper}>
                    <h5>UI Libraries</h5>
                    <ul className={styles.skills__list + " " + styles.skills__ui}>
                        <li><SiBootstrap /></li>
                        <li><SiMaterialUi /></li>
                        <li><SiTailwindcss /></li>
                    </ul>
                </div>
                <div className={styles.skills__wrapper}>
                    <h5>JavaScript Libraries</h5>
                    <ul className={styles.skills__list + " " + styles.skills__libs}>
                        <li><SiReact /></li>
                        <li><SiRedux /></li>
                        <li><SiStyledComponents /></li>
                        <li><SiReactrouter /></li>
                        <li><SiJquery /></li>
                    </ul>
                </div>
                <div className={styles.skills__wrapper}>
                    <h5>Other stuff that I use</h5>
                    <ul className={styles.skills__list + " " + styles.skills__other}>
                        <li><SiNodeDotJs /></li>
                        <li><SiPhp /></li>
                        <li><SiWordpress /></li>
                        <li><SiGit /></li>
                        <li><SiMariadb /></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
