import React from 'react';
import s from './Conversation.module.css';

const Conversation = (props) => {
    let messageField = React.createRef();

    let messagesElements = props.messagesData.map(el => <li className={el.classSet}>{el.message}</li>)

    let submitMessage = () => {
        let currentMessage = messageField.current.value;
        props.addMessage(currentMessage);
    }

    let onAreaChange = (evt) => {
        let currentMessage = evt.target.value;
        props.onChangeMessage(currentMessage);
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.conversation}>
                {messagesElements}
            </ul>
            <div className={s.inputWrapper}>
                <textarea value={props.currentMessage} onChange={onAreaChange} ref={messageField} className={s.input} />
                <button onClick={submitMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Conversation;

