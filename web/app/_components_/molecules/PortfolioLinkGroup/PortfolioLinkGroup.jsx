import React from 'react';
import PortfolioLink from '../../atoms/PortfolioLink';
import { EMPTY_ARRAY } from '../../../_commons_/constants';

const PortfolioLinkGroup = (props) => {
    const { portfolioData = EMPTY_ARRAY } = props;

    return (
        <div className='portfolio-link-group'>
            {portfolioData.map(({ link, icon, name }) => <PortfolioLink link={link} icon={icon} name={name} />)}
        </div>
    )
}

export default PortfolioLinkGroup;
