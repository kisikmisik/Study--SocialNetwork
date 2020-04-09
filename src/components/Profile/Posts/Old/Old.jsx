import React from 'react';
import s from './Old.module.css';
import Post from './Post/Post';

const Old = () => {
    return (
        <div className={s.old}>
            <Post message="It's my first props!" likes="20" />
            <Post message="Wow! That's amazing!" likes="13" />
        </div>
    )
}

export default Old;