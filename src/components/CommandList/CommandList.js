import React, { useContext } from 'react';
import consoleContext from '../../context/console-context';

import styles from './CommandList.module.css'

const CommandList = () => {
    const { commands } = useContext(consoleContext)
    let content;
    if (commands.length > 0) {
        content = commands.map((item, id) =>
            <li key={id}>
                {item}
            </li>)
    } else {
        content = <p>No commands were typed</p>
    }

    return (
        <section className={styles.command}>
            <div className={`container ${styles.command__container}`}>
                <h2>List of your commands</h2>
                <ul>
                    {content}
                </ul>
            </div>
        </section>
    );
}

export default CommandList;
