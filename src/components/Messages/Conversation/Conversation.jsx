import React from 'react';
import s from './Conversation.module.css';
import {addMessageActionCreator, changeMessageActionCreator} from "../../../state";



const Conversation = (props) => {
    let messagesElements = props.state.messagesPage.messagesData.map(el => <li className={el.classSet}>{el.message}</li>)
    let messageField = React.createRef();

    let submitMessage = () => {
        let currentMessage = messageField.current.value;
        props.dispatch(addMessageActionCreator(currentMessage));
        messageField.current.value = '';
    }

    let onAreaChange = (evt) => {
        let currentMessage = evt.target.value;
        props.dispatch(changeMessageActionCreator(currentMessage));
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.conversation}>
                {messagesElements}
            </ul>
            <div className={s.inputWrapper}>
                <textarea value={props.state.messagesPage.currentMessage} onChange={onAreaChange} ref={messageField} className={s.input} />
                <button onClick={submitMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Conversation;

