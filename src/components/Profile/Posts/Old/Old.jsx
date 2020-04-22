import React from 'react';
import s from './Old.module.css';
import Post from './Post/Post';

const Old = (props) => {

    let postsElements = props.postsData.map(el => <Post message={el.message} likes={el.likes}/>)

    return (
        <div className={s.old}>
            {postsElements}
        </div>
    )
}

export default Old;