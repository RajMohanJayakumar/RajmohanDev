import React from 'react';
import slidesStyles from '../_slides_.module.scss';
import { BACKGROUND_COLOR } from '../_slides_.contants';

const Games = () => {
    return (
        <section className={slidesStyles.container} style={{ backgroundColor: BACKGROUND_COLOR.GAMES }}>
            <h1>Games</h1>
        </section>
    )
}

export default Games;
