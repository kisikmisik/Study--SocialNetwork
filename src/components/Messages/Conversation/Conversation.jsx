import React from 'react';
import s from './Conversation.module.css';
import MessagesReduxForm from "./MessagesForm/MessagesForm";
import {Route} from "react-router-dom";

// it's in progress
const Conversation = (props) => {
    let MessagesElements = (props) => {
        return (
            <>
                {props.messagesData.map(el => <li key={el.id} className={s[el.classSet]}>{el.message}</li>)}
            </>
        )
    }

    let addMessage = (formData) => {
        props.addNewMessage(formData.currentMessage)
    }

    return (
        <div className={s.wrapper}>
            <ul className={s.conversation}>
                <Route path='/messages/111' render={() => <MessagesElements {...props}/>}/>
            </ul>
            <MessagesReduxForm onSubmit={addMessage}/>
        </div>
    )
}

export default Conversation;

