import React from 'react';

import Button from '../Layout/Button'

import styles from './Portfolio.module.css'

const Portfolio = () => {

    return (
        <section className={styles.portfolio}>
            <div className={`container ${styles.portfolio__container}`}>
                <h2>Portfolio</h2>
                <p>I have some projects, that I have separeted on two main categories.
                    Please choose one of them to view my projects.</p>
                <div className={styles.portfolio__btnWrapper}>
                    <Button to="/portfolio/personal">Personal</Button>
                    <Button to="/portfolio/commercial">Commercial</Button>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
