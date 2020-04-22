import React from 'react';
import s from './Posts.module.css';
import New from './New/New';
import Old from './Old/Old';

const Posts = (props) => {
    return (
        <section className={s.posts}>
            <h2 className={s.header}>My posts</h2>
            <New />
            <Old postsData={props.postsData}/>
        </section>
    )
}

export default Posts;