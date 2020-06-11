import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utilities/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {loginThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field component={Input} name='email' type='email' placeholder='email' className={s.formLogin} validate={[required]}/>
            <Field component={Input} name='password' type='password' placeholder='password' validate={[required]} className={s.formPassword}/>
            <label>
                <Field component='input' type='checkbox' name='rememberMe'/>
                <span>remember me</span>
            </label>
            <button className={s.formSubmit}>Submit</button>
        </form>
        )
}

let LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

let Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData);
    }

    if (props.isAuthorized) return <Redirect to={'/profile'}></Redirect>
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuthorized: state.authReducer.isAuthorized
});

let LoginWithAuth = connect(mapStateToProps, {loginThunk}) (Login)
export default LoginWithAuth;
