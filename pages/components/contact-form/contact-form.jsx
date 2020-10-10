import React from 'react'
import styles from './contact-form.module.css';
export const ContactForm = () => {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.email}>
                <div className={styles.emailIco}></div>
                <div className={styles.emailText}>Ivanova@mail.ru</div>
            </div>
            <div className={styles.phoneNumber}>
                <div className={styles.phoneIco}></div>
                <div className={styles.phoneNumberText}>Укажите номер телефона</div>
            </div>
        </div>
    )
}
