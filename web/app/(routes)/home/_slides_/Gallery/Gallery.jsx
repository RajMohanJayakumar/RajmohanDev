import React from 'react';
import slidesStyles from '../_slides_.module.scss';
import { BACKGROUND_COLOR } from '../_slides_.contants';

const Gallery = () => {
    return (
        <section className={slidesStyles.container} style={{ backgroundColor: BACKGROUND_COLOR.GALLERY }}>
            <h1>Gallery</h1>
        </section>
    )
}

export default Gallery;
