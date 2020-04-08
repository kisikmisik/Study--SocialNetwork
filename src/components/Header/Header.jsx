import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://static.gazetapowiatowa.pl/2019/10/logo-konkurs-773x515.jpg" width="200" alt="logo"/>
        </header>
    );
}

export default Header;