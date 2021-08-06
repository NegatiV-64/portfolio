import React from 'react';
import styles from './Page404.module.css'

const Page404 = () => {
    return (
        <section className={styles.page404}>
            <div className={`container ${styles.page404__container}`}>
                <h2>Page Not Found</h2>
                <p>404</p>
                <img src="https://error404.fun/img/full-preview/1x/5.png" alt="404 Error" />
            </div>
        </section>
    );
}

export default Page404;
