import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthHoc} from "../../../hoc/withAuthHoc";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        peopleData: state.messagesPage.peopleData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
// empty
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthHoc
)(Dialogs)

