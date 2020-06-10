import React from 'react';
import {addNewMessage} from "../../../redux/messagesPage-reducer";
import Conversation from "./Conversation";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        currentMessage: state.messagesPage.currentMessage
    }
}
const ConversationContainer = connect(mapStateToProps, {addNewMessage}) (Conversation)

export default ConversationContainer;

