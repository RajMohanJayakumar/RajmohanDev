import React from 'react';
import slidesStyles from '../_slides_.module.scss';
import { BACKGROUND_COLOR } from '../_slides_.contants';

const Programming = () => {
    return (
        <section id="programming" className={slidesStyles.container} style={{ backgroundColor: BACKGROUND_COLOR.PROGRAMMING }}>
            <h1>Programming</h1>
        </section>
    )
}

export default Programming;
