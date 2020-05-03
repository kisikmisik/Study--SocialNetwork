import React from 'react';
import s from './Posts.module.css';
import NewContainer from "./New/NewContainer";
import OldContainer from "./Old/OldContainer";

const Posts = (props) => {
    return (
        <section className={s.posts}>
            <h2 className={s.header}>My posts</h2>
            <NewContainer />
            <OldContainer />
        </section>
    )
}

export default Posts;