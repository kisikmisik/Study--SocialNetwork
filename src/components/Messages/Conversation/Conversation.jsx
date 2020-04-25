import React from 'react';
import s from './Conversation.module.css';
import style from './Conversation.css';


const Conversation = (props) => {
    let messagesElements = props.messagesData.map(el => <li className={el.classSet}>{el.message}</li>)
    let messageField = React.createRef();
    let submitMessage = () => {
        alert(messageField.current.value);
    }
    return (
        <div className={s.wrapper}>
            <ul className={s.conversation}>
                {messagesElements}
            </ul>
            <div className={s.inputWrapper}>
                <textarea ref={messageField} className={s.input}></textarea>
                <button onClick={submitMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Conversation;

