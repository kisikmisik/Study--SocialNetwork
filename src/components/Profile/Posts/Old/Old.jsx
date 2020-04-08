import React from 'react';
import s from './Old.module.css';
import Post from './Post/Post';

const Old = () => {
    return (
        <div className={s.old}>
            <Post />
            <Post />
        </div>
    )
}

export default Old;