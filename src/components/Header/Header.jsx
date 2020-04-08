import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <img src="https://image.flaticon.com/icons/svg/471/471468.svg"
                 height="50" alt="logo"/>
            </div>
        </header>
    );
}

export default Header;