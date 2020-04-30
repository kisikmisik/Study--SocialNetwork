import React from 'react';
import s from './New.module.css';
import {addNewPostActionCreator, changeAreaTextActionCreator} from "../../../../state";



const New = (props) => {
    let textarea = React.createRef();

    let addNewPost = () => {
        let textareaMessage = textarea.current.value;
        let action = addNewPostActionCreator(textareaMessage);
        props.dispatch(action);
    }

    let changeAreaText = () => {
        let textareaMessage = textarea.current.value;
        let action = changeAreaTextActionCreator(textareaMessage);
        props.dispatch(action);
    }

    return (
        <div className={s.wrapper}>
            <textarea ref={textarea} value={props.postAreaText} onChange={changeAreaText}/>
            <button onClick={addNewPost}>Post</button>
        </div>
    )
}

export default New;