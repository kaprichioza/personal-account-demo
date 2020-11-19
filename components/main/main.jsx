import React, { useState } from 'react';
import styles from './main.module.css';
import { ContactForm } from './../contact-form/contact-form';
import { Header } from '../header/header';
import { Navigation } from '../navigation/navigation';

const initialState = {
    name: 'Иванова Анна Михайловна',
    email: 'Ivanova@mail.ru',
    phone: 'Укажите номер телефона',
    isEditEnabled: false,
};
export const Main = (props) => {
    const [contactFormState, setContactFormState] = useState(initialState);
    const { isEditEnabled, name, phone, email } = contactFormState;
    const toggleEdit = () => {
        setContactFormState({ ...contactFormState, isEditEnabled: !isEditEnabled });
    }
    const getShortName = (name) => {
        return name.match(/^(\s*.*?\s).*\w{0,1}/)[1] + name.split(' ')[1].match(/^\W/);        
      };
    const saveContacts = (contacts) => {
        setContactFormState({
            ...contactFormState,
            ...contacts,
            isEditEnabled: !isEditEnabled,
        });

    }
    return (
        <>
            <Header>{getShortName(name)}</Header>
            <Navigation />
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
        </>
    )
}
