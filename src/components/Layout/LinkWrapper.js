import React from 'react';

import styles from './LinkWrapper.module.css'

const LinkWrapper = (props) => {
    let classes = `${styles.wrapper} ${props.className ? props.className : ""}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default LinkWrapper;
