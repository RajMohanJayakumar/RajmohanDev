import React from 'react';
import Overview from './_slides_/Overview';
import Programming from './_slides_/Programming';
import Games from './_slides_/Games';
import Gallery from './_slides_/Gallery';
import PortfolioLinkGroup from '../../_components_/molecules/PortfolioLinkGroup';
import { portfolioData } from './Home.constants';

const Home = () => {
    return <>
        <Overview />
        <Programming />
        <Games />
        <Gallery />
        <PortfolioLinkGroup portfolioData={portfolioData} />
    </>
}

export default Home;
