import React from 'react';

import ContactsForm from './ContactsForm';
import styles from './Contacts.module.css'

const Contacts = () => {

    const classNames = `container ${styles.contacts__container}`

    return (
        <section className={styles.contacts}>
            <div className={classNames}>
                <h2>Contacts</h2>
                <p>If you have something in mind, let's work together</p>
                <ContactsForm />
            </div>
        </section>
    );
}

export default Contacts;
