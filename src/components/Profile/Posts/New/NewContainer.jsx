import React from 'react';
import {addNewPostActionCreator, changeAreaTextActionCreator} from "../../../../redux/profilePage-reducer";
import New from "./New";

const NewContainer = (props) => {
    let textarea = React.createRef();

    let addNewPost = (message) => {
        let action = addNewPostActionCreator(message);
        props.store.dispatch(action);
    }

    let changeAreaText = (message) => {
        let action = changeAreaTextActionCreator(message);
        props.store.dispatch(action);
    }

    return (
        <New addNewPost={addNewPost}
             changeAreaText={changeAreaText}
             postAreaText={props.store.getState().profilePage.postAreaText}/>
    )
}

export default NewContainer;