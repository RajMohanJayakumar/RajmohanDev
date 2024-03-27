import React from 'react';
import styles from './Home.module.scss';
import PortfolioLinkGroup from '../../_components_/molecules/PortfolioLinkGroup';
import { portfolioData } from './home.constants';

const Home = () => {
    return <div className={styles.container}>
        <h1>Localhost dep</h1>
        <PortfolioLinkGroup portfolioData={portfolioData} />
        </div>
}

export default Home;
