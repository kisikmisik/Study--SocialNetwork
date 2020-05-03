import React from 'react';
import s from './Old.module.css';

const Old = (props) => {
    return (
        <div className={s.old}>
            {props.drawPosts}
        </div>
    )
}

export default Old;