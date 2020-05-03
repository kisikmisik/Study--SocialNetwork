import React from 'react';
import Old from "./Old";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
      postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const OldContainer = connect(mapStateToProps, mapDispatchToProps) (Old)

export default OldContainer;