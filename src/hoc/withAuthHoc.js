import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

// let mapStateToPropsRedirect = (state) => ({
//     isAuth: state.authReducer.isAuthorized
// })
//
// export const withAuthHoc = (Component) => {
//     class WrapperContainer extends React.Component {
//         render() {
//             if (this.props.isAuth === false) {return <Redirect to='/login'/>}
//             return <Component {...this.props}/>
//         }
//     }
//     let WrapperWithAuthContainer = connect(mapStateToPropsRedirect) (WrapperContainer)
//
//     return WrapperWithAuthContainer
//
// }

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.authReducer.isAuthorized
})

export const withAuthHoc = (Component) => {
    let wrapperContainer = (props) => {
        if (props.isAuth === false) {
            return <Redirect to='/login'/>
        } else {
            return <Component {...props}/>
        }
    }
    let WrapperWithAuthContainer = connect(mapStateToPropsRedirect)(wrapperContainer)
    return WrapperWithAuthContainer;
}