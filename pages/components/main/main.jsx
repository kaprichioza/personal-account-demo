import React, { useState } from 'react';
import styles from './main.module.css';
import { ContactForm } from './../contact-form/contact-form';
import cn from 'classnames';

const initialState = {
    name: 'Иванова Анна Михайловна',
    email: '',
    phone: '',
    isEditEnabled: false,
};
export const Main = (props) => {
    const [contactFormState, setContactFormState] = useState(initialState);
    const { isEditEnabled, name, phone, email } = contactFormState;
    const toggleEdit = () => {
        setContactFormState({ ...contactFormState, isEditEnabled: !isEditEnabled });
    }
    const saveContacts = (contacts) => {
        setContactFormState({
            ...contactFormState,
            ...contacts,
            isEditEnabled: !isEditEnabled
        });

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.leftSide}>
                    <div className={styles.contactIco}></div>
                    <div className={styles.name}>{name}</div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.edit}>
                        <div className={styles.editText} onClick={toggleEdit}>{isEditEnabled ? 'ЗАКРЫТЬ' : 'РЕДАКТИРОВАТЬ'}</div>
                        <div className={isEditEnabled ? styles.crossIco : styles.editIco} onClick={toggleEdit}></div>
                    </div>
                </div>
            </div>
            <ContactForm isEditable={isEditEnabled}
                name={name}
                phone={phone}
                email={email}
                onSaveSuccess={saveContacts} />
        </div >
    )
}
