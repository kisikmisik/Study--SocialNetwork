import React from 'react';
import {addNewPostActionCreator, changeAreaTextActionCreator} from "../../../../redux/profilePage-reducer";
import New from "./New";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postAreaText: state.profilePage.postAreaText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (message) => {
            let action = addNewPostActionCreator(message);
            dispatch(action);
        },
        changeAreaText: (message) => {
            let action = changeAreaTextActionCreator(message);
            dispatch(action);
        }
    }
}

const NewContainer = connect(mapStateToProps, mapDispatchToProps)(New)

export default NewContainer;