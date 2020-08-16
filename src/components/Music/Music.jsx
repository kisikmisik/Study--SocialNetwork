import React from 'react';
import s from './Music.module.css';
import gearImage from './../../assets/img/gear.svg'

const Music = () => {
    return (
        <section className={s.messages}>
            <img src={gearImage} alt="gear icon" width='150'/>
            <p>Work in progress</p>
        </section>
    );
}

export default Music;
