import React, { useState } from 'react';

import styles from './ContactsForm.module.css'

const ContactsForm = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    function inputNameHandler(e) {
        setInputName(e.target.value)
    }

    function inputPhoneHandler(e) {
        setInputPhone(e.target.value);
    }

    function inputTextHandler(e) {
        setInputMessage(e.target.value)
    }

    function onSendFormHandler(e) {
        e.preventDefault();
        const messageText = `*Name*: ${inputName}\nPhone: ${inputPhone}\nMessage: ${inputMessage}`
        fetch("https://api.telegram.org/bot{botAPI}/sendMessage", {
            method: "POST",
            body: JSON.stringify({
                chat_id: "{chatID}",
                text: messageText,
                parse_mode: "markdown"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(setInputMessage(""), setInputName(""), setInputPhone(""))
            .catch(error => console.log("Error: " + error))
    }

    return (
        <form onSubmit={onSendFormHandler} className={styles.form}>
            <div className={styles.form__wrapper}>
                <div className={styles.form__wrap}>
                    <input value={inputName} className={styles.name} onChange={inputNameHandler} required id="name" placeholder="Your Name" type="text" />
                </div>
                <div className={styles.form__wrap}>
                    <input onChange={inputPhoneHandler} value={inputPhone} required id="phone" placeholder="Your Phone" type="tel" />
                </div>
            </div>
            <div className={styles.form__textWrap}>
                <textarea placeholder="Your Message" onChange={inputTextHandler} value={inputMessage} id="message" required></textarea>
            </div>
            <button className={styles.form__button}>Send</button>
        </form>
    );
}

export default ContactsForm;
