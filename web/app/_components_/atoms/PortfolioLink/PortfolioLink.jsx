'use client';

import React from 'react';
import styles from './PortfolioLink.module.scss';

const PortfolioLink = (props) => {
    const { link, icon, name } = props;

    return (
        <div className={styles.container} onClick={() => window.open(link, "_blank")}>
            <p>{icon}</p>
            <p>{name}</p>
        </div>
    )
}

export default PortfolioLink;
