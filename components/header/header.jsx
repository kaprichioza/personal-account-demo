import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.notification}></div>
            <div className={styles.userInfo}>
                <div className={styles.userInfoIco}></div>
                <div className={styles.userInfoName}>{props.children}</div>
            </div>
        </div>
    )
}
