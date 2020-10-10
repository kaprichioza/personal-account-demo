import React from 'react';
import styles from './main.module.css';
import { ContactForm } from './../contact-form/contact-form';


export const Main = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.leftSide}>
                    <div className={styles.contactIco}></div>
                    <div className={styles.name}>Иванова Анна Михайловна</div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.edit}>
                        <div className={styles.editText}>РЕДАКТИРОВАТЬ</div>
                        <div className={styles.editIco}></div>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}
