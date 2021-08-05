import React from 'react';

import styles from './PortfolioPersonal.module.css'

const PortfolioPersonal = () => {

    let containerClasses = `container ${styles.personal__container}`

    return (
        <section className={styles.personal}>
            <div className={containerClasses}>
                <h2>Personal</h2>
                <p>Here is the list of the personal projects. All the source codes are published on GitHub. Links are given below.</p>
                <ul className={styles.personal__list}>
                    <li className={styles.personal__project}>
                        <h4>Les Pidales</h4>
                        <div className={styles.personal__projectData}>
                            <a href="https://github.com/NegatiV-64/les-pidales-react">GitHub</a>
                            <a target="_blank" rel="noreferrer" href="https://negativ-64.github.io/les-pidales-react/">Website</a>
                        </div>
                    </li>
                    <li className={styles.personal__project}>
                        <h4>LatMetio</h4>
                        <div className={styles.personal__projectData}>
                            <a href="https://github.com/NegatiV-64/latmetio">GitHub</a>
                            <a target="_blank" rel="noreferrer" href="https://latmetio.uz/">Website</a>
                        </div>
                    </li>
                    <li className={styles.personal__project}>
                        <h4>Music Player</h4>
                        <div className={styles.personal__projectData}>
                            <a href="https://github.com/NegatiV-64/music-player">GitHub</a>
                            <a target="_blank" rel="noreferrer" href="https://negativ-64.github.io/music-player/">Website</a>
                        </div>
                    </li>
                    <li className={styles.personal__project}>
                        <h4>Les Pidales</h4>
                        <div className={styles.personal__projectData}>
                            <a href="https://github.com/NegatiV-64/solar-system">GitHub</a>
                            <a target="_blank" rel="noreferrer" href="https://negativ-64.github.io/solar-system/">Website</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default PortfolioPersonal;
