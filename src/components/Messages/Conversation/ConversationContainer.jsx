import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../../redux/messagesPage-reducer";
import Conversation from "./Conversation";



const ConversationContainer = (props) => {
    let messagesElements = props.store.getState().messagesPage.messagesData.map(el => <li className={el.classSet}>{el.message}</li>)

    let submitMessage = (currentValue) => {
        props.store.dispatch(addMessageActionCreator(currentValue));
    }

    let onAreaChange = (evt) => {
        props.store.dispatch(changeMessageActionCreator(evt));
    }

    return (
        <Conversation messagesElements={messagesElements}
                      currentMessage={props.store.getState().messagesPage.currentMessage}
                      onChangeMessage={onAreaChange}
                      addMessage={submitMessage}/>
    )
}

export default ConversationContainer;

