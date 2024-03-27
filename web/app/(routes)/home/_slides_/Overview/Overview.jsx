import React from 'react';
import styles from '../../Home.module.scss';
import PortfolioLinkGroup from '../../../../_components_/molecules/PortfolioLinkGroup';
import { portfolioData } from '../../Home.constants';

const Home = () => {
    return <div className={styles.container}>
        <h1>Raj Mohan Dev</h1>
        <PortfolioLinkGroup portfolioData={portfolioData} />
        </div>
}

export default Home;
