import React from 'react';
import s from './Posts.module.css';
import New from './New/New';
import Old from './Old/Old';

const Posts = (props) => {
    return (
        <section className={s.posts}>
            <h2 className={s.header}>My posts</h2>
            <New postAreaText={props.state.profilePage.postAreaText}
                 addPost={props.addPost}
                 changePostText={props.changePostText}/>
            <Old postsData={props.state.profilePage.postsData}/>
        </section>
    )
}

export default Posts;