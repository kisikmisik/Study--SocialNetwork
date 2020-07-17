import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <img src="https://image.flaticon.com/icons/svg/471/471468.svg"
                 height="50" alt="logo"/>

             {props.authData.isAuthorized ?
                 <div>
                     <p className={s.login}>{props.authData.login}</p>
                     <button onClick={props.logout}>Logout</button>
                 </div>
                 : <p className={s.login}>Login</p>}
            </div>
        </header>
    );
}

export default Header;