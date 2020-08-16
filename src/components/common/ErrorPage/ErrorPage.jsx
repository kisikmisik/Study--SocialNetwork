import React from 'react';
import s from './ErrorPage.module.css';
import errorImage from './../../../assets/img/error.svg'

const ErrorPage = () => {
    return (
        <section className={s.errorPage}>
            <img src={errorImage} alt="404 error" width='300'/>
            <span>Page Not Found</span>
        </section>
    );
}

export default ErrorPage;
