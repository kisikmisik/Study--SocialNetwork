import React from 'react';
import s from './Settings.module.css';
import gearImage from './../../assets/img/gear.svg'

const Settings = () => {
    return (
        <section className={s.settings}>
            <img src={gearImage} alt="gear icon" width='150'/>
            <p>Work in progress</p>
        </section>
    );
}

export default Settings;
