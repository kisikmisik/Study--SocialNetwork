import React from 'react';
import s from './New.module.css';

const New = () => {
    return (
        <form className={s.wrapper}>
            <input type="text" placeholder="What's new?" />
            <button type="submit">Post</button>
        </form>
    )
}

export default New;