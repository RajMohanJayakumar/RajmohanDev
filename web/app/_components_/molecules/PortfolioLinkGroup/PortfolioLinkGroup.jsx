import React from 'react';
import { FloatButton } from 'antd'
import FloatButtonGroup from 'antd/lib/float-button/FloatButtonGroup'
import { EMPTY_ARRAY } from '../../../_commons_/constants';
import { PORTFOLIO } from './PortfolioLinkGroup.constants';

const getFloatButton = ({ link, iconUrl, tooltip }) => <>
    <FloatButton
            href={link}
            tooltip={tooltip}
            target="_blank"
            icon={<img src={iconUrl} alt="L" style={{ height: '2rem' }} />}
        />
</>;

const PortfolioLinkGroup = () => {
    return (
       <>
       <FloatButtonGroup style={{ right: 24 + 70 + 70  }}>
            {getFloatButton(PORTFOLIO.LINKEDIN)}
        </FloatButtonGroup>
        <FloatButtonGroup style={{ right: 24 + 70 }}>
            {getFloatButton(PORTFOLIO.GITHUB)}
            {getFloatButton(PORTFOLIO.MEDIUM)}
        </FloatButtonGroup>
        <FloatButtonGroup style={{ right: 24 }}>
            {getFloatButton(PORTFOLIO.STACKOVERFLOW)}
            {getFloatButton(PORTFOLIO.INSTAGRAM)}
            {getFloatButton(PORTFOLIO.FACEBOOK)}
        </FloatButtonGroup>
       </>
    )
}

export default PortfolioLinkGroup;
