import React from 'react';
import s from './PersonalInfo.module.css';
import ProfileStatus from "./../ProfileStatus/ProfileStatus2";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";


const PersonalInfoForm = (props) => {
    console.log(props)
    return (
        <form className={s.personal} onSubmit={props.handleSubmit}>
            <h2 className={s.name}>{props.profileInfo.fullName}</h2>
            <label>
                <span>About me:</span>
                <Field name={'aboutMe'} component={'input'} type={'text'}/>
            </label>
            <label>
                <span>Full name:</span>
                <Field name={'fullName'} component={'input'} type={'text'}/>
            </label>
            <label>
                <span>Job seeker:</span>
                <Field name={'lookingForAJob'} component={'input'} type={'checkbox'}/>
            </label>
            <label>
                <span>Position:</span>
                <Field name={'lookingForAJobDescription'} component={'input'} type={'text'}/>
            </label>
            {Object.keys(props.profileInfo.contacts).map(key => {
                return <ContactInput key={key} inputName={key}/>
            })}
            {props.isProfileYours && props.editMode === true &&
            <div className={s.editWrapper}>
                <button className={s.editButton}>Save</button>
                <p onClick={() => {
                    props.changeEditMode(false)
                }} className={s.editButton}>Cancel</p>
            </div>}
            {props.error && <p className={s.formError}>{props.error}</p>}
            {props.error && props.displayError(props.error)}
        </form>

    )
}
let ContactInput = ({inputName}) => {
    return (
        <label>
            <span>{inputName}</span>
            <Field name={inputName} component={Input} type={'text'}/>
        </label>
    )

}

const PersonalInfoReduxForm = reduxForm({form: 'profileEdit'})(PersonalInfoForm)

export default PersonalInfoReduxForm;