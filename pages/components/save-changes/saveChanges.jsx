import React from 'react'
import styles from './saveChanges.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
const initialState = {
    modalStepOne: false,
    modalStepTwo: false,
};
export const SaveChanges = (props) => {
    // const onSubmit = (form) => {
    //     axios.post('/api/login', form)
    //         .then(() => props.onSaveSuccess(form))
    // }
    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 600,
            height: '318px',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '10px',
            '&:focus': {
                outline: 'none',
            },
            ['@media (max-width:768px)']: {
                width: '100%',
                transform: 'translate(-50%, -30%)',
                height: '80%',
            }
        },
        title: {
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '33px',
            paddingBottom: '32px',
            color: 'rgba(49, 49, 49, 0.7)',
            margin: '0',
            ['@media (max-width:768px)']: {
                paddingBottom: '40px',
            }
        },
        titleStepTwo: {
            paddingBottom: '42px',
            paddingTop: '30px',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '33px',
            color: 'rgba(49, 49, 49, 0.7)',
            margin: '0',
        },
        cross: {
            position: 'absolute',
            top: '29px',
            right: '29px',
            width: '14px',
            height: '14px',
            color: '#828282',
            ['@media (max-width:768px)']: {
                top: '25px',
                right: '25px',
            }
        },
        '@global': {
            '[class*="titleStepTwo"]+[class*="saveChanges_button"]': {
                ['@media (max-width:768px)']: {
                    display: 'none',
                }
            }
        },
    }));
    const classes = useStyles();
    const [modalState, setModalState] = React.useState(initialState);
    const { modalStepOne, modalStepTwo } = modalState;
    const openModal = (isFirstModal) => {
        isFirstModal
            ? setModalState({ ...modalState, modalStepOne: true })
            : setModalState({ ...setModalState, modalStepOne: false, modalStepTwo: true });

    };
    const closeModal = () => {
        setModalState({ ...modalState, modalStepOne: false, modalStepTwo: false });
    };
    const body = (
        <div className={classes.paper}>
            <div className={styles.wrapper}>
                {modalStepOne
                    ? <p className={classes.title}>Сохранить изменения?</p>
                    : <p className={classes.titleStepTwo}>Данные успешно сохранены</p>
                }
                {modalStepOne
                    ? <div className={styles.button}>
                        <Button onClick={() => { openModal(false); /*onSubmit(props.form)*/ }} variant="contained" color="primary" type="button">Сохранить</Button>
                    </div>
                    : <div className={styles.button}>
                        <Button onClick={closeModal} variant="contained" color="primary" type="button">Хорошо</Button>
                    </div>
                }
                <div className={modalStepOne ? styles.cancel : styles.isHidden}>
                    <Button onClick={closeModal} variant="outlined" color="primary" type="button">Не сохранять</Button>
                </div>
                <IconButton className={modalStepOne ? classes.cross : styles.isHidden} onClick={closeModal} aria-label="cross" color="primary">
                    <CloseIcon />
                </IconButton>
            </div>
        </div>
    );

    return (
        <div>
            <div className={styles.button}>
                <Button onClick={() => { openModal(true) }} variant="contained" color="primary" type="submit">Сохранить изменения</Button>
            </div>
            <Modal
                open={modalStepOne || modalStepTwo}
                onClose={closeModal}
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
