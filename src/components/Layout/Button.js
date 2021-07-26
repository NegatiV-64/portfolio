import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css'

const Button = (props) => {
    let className = `${styles.button} ${props.className ? props.className : ""}`
    
    return (
        <Link onClick={props.onClick} to={props.to} className={className}>
            {props.children}
        </Link>
    );
}

export default Button;
