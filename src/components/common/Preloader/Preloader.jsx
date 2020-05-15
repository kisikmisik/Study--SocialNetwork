import React from "react";
import * as s from './Preloader.module.css';
import preloadImg from '../../../assets/img/Spinner-1s-200px.svg';

let Preloader = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={preloadImg} alt=""/>
        </div>
    )
}

export default Preloader;