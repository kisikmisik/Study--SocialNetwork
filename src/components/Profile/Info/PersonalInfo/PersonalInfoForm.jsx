import React from 'react';
import s from './PersonalInfo.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";


const PersonalInfoForm = (props) => {
    return (
        <form className={s.personal} onSubmit={props.handleSubmit}>
            <h2 className={s.name + ' visually-hidden'}>{props.profileInfo.fullName}</h2>
            <label className={s.fullNameWrapper}>
                <span>Full name:</span>
                <Field name={'fullName'} component={'input'} type={'text'} placeholder={'Name Surname'}/>
            </label>
            <label className={s.aboutMeWrapper}>
                <span>About me:</span>
                <Field name={'aboutMe'} component={'input'} type={'text'} placeholder={'a few words..'}/>
            </label>
            <label className={s.jobWrapper}>
                <span>Job seeker:</span>
                <Field name={'lookingForAJob'} component={'input'} type={'checkbox'}/>
            </label>
            <label className={s.positionWrapper}>
                <span>Position:</span>
                <Field name={'lookingForAJobDescription'} component={'input'} type={'text'} placeholder={'it or gastronomy?'}/>
            </label>
            <fieldset className={s.socialWrapper}>
                <legend>Social media links:</legend>
                {Object.keys(props.profileInfo.contacts).map(key => {
                    return <ContactInput profileInfo={props.profileInfo} key={key} inputName={key}/>
                })}
            </fieldset>
            {props.isProfileYours && props.editMode === true &&
            <div className={s.editWrapper}>
                <button className={s.editButton}>Save changes</button>
                <p onClick={() => {
                    props.changeEditMode(false)
                }} className={s.cancelButton}>Cancel</p>
            </div>}
            {props.error && <p className={s.formError}>{props.error}</p>}
            {props.error && props.displayError(props.error)}
        </form>

    )
}
let ContactInput = ({profileInfo, inputName}) => {
    return (
        <label>
            <span>{inputName}</span>
            <Field name={inputName} component={Input} type={'text'}/>
        </label>
    )

}

const PersonalInfoReduxForm = reduxForm({form: 'profileEdit'})(PersonalInfoForm)

export default PersonalInfoReduxForm;