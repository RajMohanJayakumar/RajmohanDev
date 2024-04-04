import React from 'react';
import Overview from './_slides_/Overview';
import Programming from './_slides_/Programming';
import Games from './_slides_/Games';
import Gallery from './_slides_/Gallery';
import PortfolioLinkGroup from '@molecules/PortfolioLinkGroup';

const Home = () => <div>
  <>
    <Overview />
    <Programming />
    <Games />
    <Gallery />
  </>
  <>
    <PortfolioLinkGroup />
  </>
</div>

export default Home;
