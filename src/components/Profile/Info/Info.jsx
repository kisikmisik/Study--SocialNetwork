import React from 'react';
import s from './Info.module.css';
import Avatar from './Avatar/Avatar';
import Personal from './Personal/Personal';

const Info = () => {
    return (
        <section className={s.info}>
            <Avatar />
            <Personal />
        </section>
    )
}

export default Info;