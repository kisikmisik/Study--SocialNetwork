import React from 'react';
import s from './New.module.css';

const New = (props) => {
    let textarea = React.createRef();

    let onPostChange = () => {
        let textareaMessage = textarea.current.value;
        props.changeAreaText(textareaMessage);
    }

    let addPost = () => {
        let textareaMessage = textarea.current.value;
        props.addNewPost(textareaMessage);
    }

    return (
        <div className={s.wrapper}>
            <textarea ref={textarea} value={props.postAreaText} onChange={onPostChange}/>
            <button onClick={addPost}>Post</button>
        </div>
    )
}

export default New;