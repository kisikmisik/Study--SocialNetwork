import React from 'react';
import s from './New.module.css';

const New = (props) => {
    let textarea = React.createRef();

    let addNewPost = () => {
        let textareaMessage = textarea.current.value;
        props.addPost(textareaMessage);
    }

    let changeAreaText = () => {
        props.changePostText(textarea.current.value);
    }

    return (
        <div className={s.wrapper}>
            <textarea ref={textarea} value={props.postAreaText} onChange={changeAreaText}/>
            <button onClick={addNewPost}>Post</button>
        </div>
    )
}

export default New;