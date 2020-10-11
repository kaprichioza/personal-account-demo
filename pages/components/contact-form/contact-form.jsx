import React from 'react'
import { Form, Field } from 'react-final-form'
import styles from './contact-form.module.css';
import { TextFieldAdapter } from './../text-field-adapter/text-field-adapter';
import { SaveChanges } from '../save-changes/saveChanges';

export const ContactForm = (props) => {    
    const initialValues = {
        name: props.name,
        phone: props.phone,
        email: props.email,
    };
    const onSubmit = (form) => {
        axios.post('/api/login', form)
            .then(() => props.onSaveSuccess(form))
    }
    const validate = (values) => {
        const errors = {}
        const validationFIO = new RegExp(`^[А-ЯЁ][а-яё]*([-][А-ЯЁ][а-яё]*)?\\s[А-ЯЁ][а-яё]*\\s[А-ЯЁ][а-яё]*$`, 'u');
        if (!validationFIO.test(values.name)) {
            errors.name = 'Вы неверно указали имя'
        }
        const validationEmail = new RegExp(/\S+@\S+\.\S+/);
        if (!validationEmail.test(values.email)) {
            errors.email = 'Вы неверно указали почту'
        }
        const validationPhone = new RegExp(/(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?/);
        if (!validationPhone.test(values.phone)) {
            errors.phone = 'Вы неверно указали телефон'
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
                            <SaveChanges />
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
