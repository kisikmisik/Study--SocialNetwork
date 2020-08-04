import React from 'react';
import s from './Posts.module.css';
import NewPostReduxForm from "./New/NewPost";
import OldContainer from "./Old/OldContainer";

const Posts = (props) => {
    return (
        <section className={s.posts}>
            {props.isProfileYours && <PostsSection {...props} />}
        </section>
    )
}

const PostsSection = (props) => {
    let addNewPost = (formData) => {
        props.addNewPost(formData.currentText)
        formData.currentText = '';
    }
    return (
        <>
            <h2 className='visually-hidden'>My posts</h2>
            <NewPostReduxForm onSubmit={addNewPost} />
            <OldContainer {...props}/>
        </>
    )
}

export default Posts;