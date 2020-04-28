import React from 'react';
import s from './Conversation.module.css';

const Conversation = (props) => {
    let messagesElements = props.messagesData.map(el => <li className={el.classSet}>{el.message}</li>)
    let messageField = React.createRef();

    let submitMessage = () => {
        let currentMessage = messageField.current.value;
        props.addMessage(currentMessage);
        messageField.current.value = '';
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.conversation}>
                {messagesElements}
            </ul>
            <div className={s.inputWrapper}>
                <textarea ref={messageField} className={s.input} />
                <button onClick={submitMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Conversation;

