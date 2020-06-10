import React from 'react';
import s from './Conversation.module.css';
import MessagesReduxForm from "./MessagesForm/MessagesForm";

const Conversation = (props) => {
    let messagesElements = props.messagesData.map(el => <li key={el.id} className={el.classSet}>{el.message}</li>)
    let addMessage = (formData) => {
        props.addNewMessage(formData.currentMessage)
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.conversation}>
                {messagesElements}
            </ul>
            <MessagesReduxForm onSubmit={addMessage}/>
        </div>
    )
}

export default Conversation;

