import React from 'react';
import s from './News.module.css';
import gearImage from './../../assets/img/gear.svg'

const News = () => {
    return (
        <section className={s.news}>
            <img src={gearImage} alt="gear icon" width='150'/>
            <p>Work in progress</p>
        </section>
    );
}

export default News;
