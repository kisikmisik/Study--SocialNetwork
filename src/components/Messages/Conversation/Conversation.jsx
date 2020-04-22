import React from 'react';
import s from './Conversation.module.css';

const Conversation = (props) => {
    let messagesElements = props.messagesData.map(el => <li className={s.item}>{el.message}</li>)
    return (
        <ul className={s.conversation}>
            {messagesElements}
        </ul>
    )
}

export default Conversation;

