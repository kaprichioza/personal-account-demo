import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { Form, Field } from 'react-final-form'
import styles from './contact-form.module.css';
import { TextFieldAdapter } from './../text-field-adapter/text-field-adapter';
import axios from 'axios';

export const ContactForm = (props) => {
    const onSubmit = (form) => {
        axios.post('/api/login', form)
            .then(() => props.onSaveSuccess(form))
    }
    const initialValues = {
        name: props.name,
        phone: props.phone,
        email: props.email,
    };
    const validate = (values) => {
        const errors = {}
        debugger;
        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        if (!values.phone) {
            errors.phone = 'Required'
        }
        return errors
    };
    return (
        <div className={styles.formWrapper}>
            {props.isEditable ?
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initialValues}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.fields}>
                                <div className={styles.field}>
                                    <Field
                                        name="name"
                                        label="Фамилия и имя"
                                        placeholder="Укажите ваши фамилию и имя"
                                        variant="outlined"
                                        component={TextFieldAdapter}
                                    />
                                    <div></div>
                                </div>
                                <div>
                                    <Field
                                        name="phone"
                                        label="E-mail"
                                        placeholder="Ivanova@mail.ru"
                                        variant="outlined"
                                        component={TextFieldAdapter}
                                    />
                                    <div></div>
                                </div>
                                <div>
                                    <Field
                                        name="email"
                                        label="Номер телефона"
                                        placeholder="Укажите номер телефона"
                                        variant="outlined"
                                        component={TextFieldAdapter}
                                    />
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles.button}>
                                <Button variant="contained" color="primary" type="submit"> Primary</Button>
                            </div>
                        </form>
                    )}
                />



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
