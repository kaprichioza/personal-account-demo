import React from 'react'
import { Form, Field } from 'react-final-form'
import styles from './contact-form.module.css';
import { TextFieldAdapter } from './../text-field-adapter/text-field-adapter';
import { SaveAction } from '../save-action/save-action';
import axios from 'axios';

export const ContactForm = (props) => {    
    const initialValues = {
        name: props.name,
        phone: props.phone,
        email: props.email,
    };

    const onSubmit = (form) => {
        return axios.post('/api/login', form);                 
    }    
    const validate = (values) => {
        const errors = {}
        const validationFIO = new RegExp(`^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\\s[А-ЯЁ][а-яё]*\\s[А-ЯЁ][а-яё]*$`, 'u');
        if (!validationFIO.test(values.name)) {
            errors.name = 'Введите ФИО через пробел'
        }
        const validationEmail = new RegExp(/\S+@\S+\.\S+/);
        if (!validationEmail.test(values.email)) {
            errors.email = 'Вы неверно указали почту'
        }
        const validationPhone = new RegExp(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?/);
        if (!validationPhone.test(values.phone)) {
            errors.phone = 'Укажите телефон в формате 89991234567'
        }
        return errors
    };
    return (
        <div className={styles.formWrapper}>
            {props.isEditable ?
                <Form
                    onSubmit={()=>{}}
                    validate={validate}
                    initialValues={initialValues}
                    render={({ handleSubmit, submitting, valid, values}) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.fields}>
                                <div className={styles.field}>
                                    <div className={styles.fieldContactIco}></div>
                                    <Field
                                        name="name"
                                        label="Фамилия и имя"
                                        placeholder="Укажите ваши фамилию и имя"
                                        variant="outlined"
                                        component={TextFieldAdapter}
                                    />

                                </div>
                                <div className={styles.fieldEmail}>
                                    <div className={styles.fieldEmailIco}></div>
                                    <Field
                                        name="email"
                                        label="E-mail"
                                        placeholder="Ivanova@mail.ru"
                                        variant="outlined"
                                        component={TextFieldAdapter}
                                    />

                                </div>
                                <div className={styles.field}>
                                    <div className={styles.fieldPhoneIco}></div>
                                    <Field
                                        name="phone"
                                        label="Номер телефона"
                                        placeholder="Укажите номер телефона"
                                        variant="outlined"
                                        component={TextFieldAdapter}
                                    />
                                </div>
                            </div>                            
                            <SaveAction disabled={!valid || submitting}
                            onSubmit={onSubmit}
                            onSaveSuccess={props.onSaveSuccess}
                            form={values}
                            />
                        </form>
                    )}
                />
                : <>
                    <div className={styles.email}>
                        <div className={styles.emailIco}></div>
                    <div className={styles.emailText}>{props.email}</div>
                    </div>
                    <div className={styles.phoneNumber}>
                        <div className={styles.phoneIco}></div>
                        <div className={styles.phoneNumberText}>{props.phone}</div>
                    </div>
                </>}
        </div>
    )
}
