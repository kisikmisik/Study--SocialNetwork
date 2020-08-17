import React, {useState} from "react";
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
            <div className={s.formInnerWrapper}>
                <Field component={Input} name='email' type='email' placeholder='email'
                       className={s.formLogin} validate={[required]}/>
                <Field component={Input} name='password' type='password'
                       placeholder='password' validate={[required]} className={s.formPassword}/>
                <div className={s.loginBottom}>
                    {props.isLoading ?
                        <button className={s.disabledButton} disabled={true}>Loading..</button> :
                        <button type='submit' className={s.formSubmit}>Log in</button>}

                    <label className={s.rememberMeWrapper}>
                        <Field component='input' type='checkbox' name='rememberMe' className={s.checkboxInput}/>
                        <span>remember me</span>
                    </label>
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} alt='captcha'/>}
                {props.captchaUrl && <Field component={Input} type='text' name={'captcha'}/>}
                {props.error && <p className={s.formError}>{props.error}</p>}
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    let [isLoading, changeLoadingStatus] = useState(false);

    const onSubmit = (formData) => {
        changeLoadingStatus(true);
        props.loginThunk(formData).then(()=> {changeLoadingStatus(false)});
    }

    if (props.isAuthorized) return <Redirect to={'/profile'}></Redirect>
    return (
        <div className={s.loginWrapper}>
            <h1 className='visually-hidden'>User Login</h1>
            <LoginReduxForm isLoading={isLoading} captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuthorized: state.authReducer.isAuthorized,
    captchaUrl: state.authReducer.captchaUrl
});

let LoginWithAuth = connect(mapStateToProps, {loginThunk})(Login)
export default LoginWithAuth;
