import React from 'react';
import s from './Posts.module.css';
import NewPostReduxForm from "./New/NewPost";
import OldContainer from "./Old/OldContainer";

const Posts = (props) => {
    let addNewPost = (formData) => {
        props.addNewPost(formData.currentText)
    }
    return (
        <section className={s.posts}>
            <h2 className={s.header}>My posts</h2>
            <NewPostReduxForm onSubmit={addNewPost} />
            <OldContainer />
        </section>
    )
}

export default Posts;