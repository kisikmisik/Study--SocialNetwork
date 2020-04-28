import React from 'react';
import s from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Conversation from "./Conversation/Conversation";

const Messages = (props) => {
    return (
        <section className={s.messages}>
           <Dialogs peopleData={props.state.messagesPage.peopleData}/>
           <Conversation addMessage={props.addMessage} messagesData={props.state.messagesPage.messagesData}/>
        </section>
    );
}

export default Messages;
