import React from 'react';
import styles from './main.module.css';

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
        </div>
    )
}
