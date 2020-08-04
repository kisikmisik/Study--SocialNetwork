import React from 'react';
import s from './Old.module.css';
import Post from './Post/Post';

const Old = (props) => {
    let postsElements = props.postsData
        .map(el => <Post photo={props.profileInfo.photos.small}
                         key={el.id} message={el.message}
                         likes={el.likes} name={props.profileInfo.fullName} />)
    return (
        <div className={s.old}>
            {postsElements}
        </div>
    )
}

export default Old;