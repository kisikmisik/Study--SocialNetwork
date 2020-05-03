import React from 'react';
import Post from './Post/Post';
import Old from "./Old";

let OldContainer = (props) => {
    let postsElements = props.store.getState().profilePage.postsData.map(el => <Post message={el.message} likes={el.likes}/>)

    return (
        <Old drawPosts={postsElements}/>
    )
}

export default OldContainer;