import React from 'react'
import styles from './contact-form.module.css';

export const ContactForm = (props) => {

    return (
        <div className={styles.formWrapper}>
            {props.isEditable ?
                <form className={styles.form}>
                    <div className={styles.fields}>
                        <div className={styles.field}>
                            <div>FIO</div>
                            <div></div>
                        </div>
                        <div>
                            <div>Phone</div>
                            <div></div>
                        </div>
                        <div>
                            <div>EMAIL</div>
                            <div></div>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button>button</button>
                    </div>
                </form>

                : <>
                    <div className={styles.email}>
                        <div className={styles.emailIco}></div>
                        <div className={styles.emailText}>Ivanova@mail.ru</div>
                    </div>
                    <div className={styles.phoneNumber}>
                        <div className={styles.phoneIco}></div>
                        <div className={styles.phoneNumberText}>Укажите номер телефона</div>
                    </div>
                </>}
        </div>
    )
}
