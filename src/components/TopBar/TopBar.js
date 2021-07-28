import React, {useState} from 'react';

import styles from './TopBar.module.css'

const TopBar = () => {

    const [expandState, setExpandState] = useState(false);
    const [minifyState, setMinifyState] = useState(false);

    function onExpandClickHandler (e) {
        e.preventDefault();
        if (expandState) {
            document.querySelector('#root').style.height = "85%"
            document.querySelector('#root').style.width = "80%"
            document.querySelector("main").style.overflowY = "visible";
            document.querySelector("main").style.overflowX = "visible";
            document.querySelector('main').style.height = "auto";
            setExpandState(false)
        } else {
            document.querySelector('#root').style.height = "100%"
            document.querySelector('#root').style.width = "100%"
            document.querySelector("main").style.overflowY = "visible";
            document.querySelector("main").style.overflowX = "visible";
            document.querySelector('main').style.height = "auto";
            setExpandState(true)
        }
    }

    function onMinifyClickHandler(e) {
        e.preventDefault();
        if (minifyState) {
            document.querySelector('#root').style.height = "85%"
            document.querySelector("main").style.overflowY = "visible";
            document.querySelector("main").style.overflowX = "visible";
            document.querySelector('main').style.height = "auto";
            setMinifyState(false)
        } else {
            document.querySelector('#root').style.height = "0%";
            document.querySelector("main").style.overflowY = "hidden";
            document.querySelector("main").style.overflowX = "hidden";
            document.querySelector('main').style.height = "0";
            setMinifyState(true)
        }
    }

    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.nav__container}`}>
                <div className={styles.nav__buttons}>
                    <button className={styles.nav__button + " " + styles.nav__button_close}>
                        <svg width="7" height="7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="#000" strokeWidth="1.2" strokeLinecap="round" d="M1.182 5.99L5.99 1.182m0 4.95L1.182 1.323"></path>
                        </svg>
                    </button>

                    <button onClick={onMinifyClickHandler} className={styles.nav__button + " " + styles.nav__button_minimize}>
                        <svg width="6" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="#000" strokeWidth="2" strokeLinecap="round" d="M.61.703h5.8"></path>
                        </svg>
                    </button>

                    <button onClick={onExpandClickHandler} className={styles.nav__button + " " + styles.nav__button_expand}>
                        <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                            <path d="M4.871 3.553L9.37 8.098V3.553H4.871zm3.134 5.769L3.506 4.777v4.545h4.499z"></path>
                        </svg>
                    </button>
                </div>
                <p className={styles.terminal}>Aziz Bektemirov's Terminal</p>
            </div>
        </nav>
    );
}

export default TopBar;
