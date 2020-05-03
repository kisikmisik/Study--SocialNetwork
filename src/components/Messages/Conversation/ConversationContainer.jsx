import React from 'react';
import {addMessageActionCreator, changeMessageActionCreator} from "../../../redux/messagesPage-reducer";
import Conversation from "./Conversation";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        currentMessage: state.messagesPage.currentMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (evt) => {
            dispatch(changeMessageActionCreator(evt));
        },
        addMessage: (currentValue) => {
            dispatch(addMessageActionCreator(currentValue));
        }
    }
}
const ConversationContainer = connect(mapStateToProps, mapDispatchToProps) (Conversation)

export default ConversationContainer;

