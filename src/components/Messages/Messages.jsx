import React from 'react';
import s from './Messages.module.css';
import DialogsContainer from "./Dialogs/DialogsContainer";
import ConversationContainer from "./Conversation/ConversationContainer";

const Messages = (props) => {
    return (
        <section className={s.messages}>
           <DialogsContainer store={props.store}/>
           <ConversationContainer store={props.store}/>
        </section>
    );
}

export default Messages;
