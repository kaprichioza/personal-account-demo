import React from 'react';
import styles from './navigation.module.css';

export const Navigation = (props) => {
    return (        
        <div className={styles.wrapper}>
            <div className={styles.title}>ЛИЧНЫЙ ПРОФИЛЬ</div>
            <div className={styles.bradCrumbs}>Главная/Личный профиль</div>                  
        </div>
    )
}
