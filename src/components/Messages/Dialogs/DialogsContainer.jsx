import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        peopleData: state.messagesPage.peopleData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
