import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"
             alt="avatar" height="30"/>
            <span>Some random text</span>
        </div>
    )
}

export default Post;