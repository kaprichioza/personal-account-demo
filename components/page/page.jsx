import React from 'react';
import styles from './page.module.css';

export const Page = (props) => {
    return (        
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {props.children}
            </div>            
        </div>
    )
}
