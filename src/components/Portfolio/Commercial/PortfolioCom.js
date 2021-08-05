import React from 'react';

import styles from './PortfolioCom.module.css'

const PortfolioCom = () => {
    return (
        <section className={styles.commer}>
            <div className={`container ${styles.commer__container}`}>
                <h2>Commercial</h2>
                <p>Here is the list of the commercial projects, where I worked either as a part of team or individually</p>
                <ul className={styles.commer__list}>
                    <li className={styles.commer__project}>
                        <h4>Tegen Shop</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://shop.tegen.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>Tegen Shop Android App</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.latmedia.tegenshop">Play Store</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>Laminam</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://laminam.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>UzTex</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://uztexgroup.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>KS Group</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://ksgroup.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>Tegen</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://tegen.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>Astor Alliance</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://astoralliance.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.commer__project}>
                        <h4>LatMedia</h4>
                        <div className={styles.commer__projectData}>
                            <a target="_blank" rel="noreferrer" href="https://latmedia.uz/">Website</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default PortfolioCom;
