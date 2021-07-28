import React from 'react';

import Button from '../Layout/Button';
import LinkWrapper from '../Layout/LinkWrapper';

import styles from './Home.module.css'

const Home = (props) => {
    const linkList = props.linkList.map(item =>
        <Button key={item.path} to={item.path}>{item.link}</Button>
    )

    return (
        <section className={styles.home}>
            <div className={`container ${styles.home__container}`}>
                <div className={styles.homeTitleWrapper}>
                    <h1 className={styles.typingTitle + " " + styles.homeTitle}>Hi, my name is Aziz Bektemirov.</h1>
                </div>
                <p className={styles.homeInfo}>I am a front-end developer from Tashkent, Uzbekistan. I have serious passion for building modern and attractive websites.</p>
                <p className={styles.homeQuote}>“It’s not a bug. It’s an undocumented feature!”</p>
                <LinkWrapper>
                    {linkList}
                </LinkWrapper>
            </div>
        </section>
    );
}

export default Home;
