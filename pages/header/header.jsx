import React from 'react';
import styles from './header.module.css';

export const Header = (props) => {
    return (        
        <div className={styles.wrapper}>
                  <div className={styles.notification}></div>
                  <div>Иванов</div>
        </div>
    )
}
