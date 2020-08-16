import React, {useEffect} from 'react';
import s from './PersonalInfo.module.css';
import ProfileStatus from "./../ProfileStatus/ProfileStatus2";

const PersonalInfo = (props) => {
    useEffect(() => {
    }, [props])
    return (
        <div className={s.personal}>
            <h2 className={s.name}>{props.profileInfo.fullName}</h2>
            <ProfileStatus isProfileYours={props.isProfileYours} userStatus={props.userStatus}
                           updateStatusThunk={props.updateStatusThunk}/>
            <div className={s.personal}>
                <p className={s.aboutMeWrapper}>
                    <span className={s.personalTitle}>About me:</span>
                    <span>{props.profileInfo.aboutMe}</span>
                </p>
                <p className={s.jobWrapper}>
                    <span className={s.personalTitle}>Job seeker:</span>
                    <span>{props.profileInfo.lookingForAJob ? <span>Yes</span> : <span>No</span>}</span>
                </p>
                <p className={s.positionWrapper}>
                    <span className={s.personalTitle}>Position:</span>
                    <span>{props.profileInfo.lookingForAJobDescription}</span>
                </p>
                <fieldset className={s.socialWrapper}>
                    <legend>Social media links:</legend>
                    {Object.keys(props.profileInfo.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactLink={props.profileInfo.contacts[key]}/>
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
            </div>


        </div>
    )
}

let Contact = ({contactTitle, contactLink}) => {
    return (
        <div className={s.contactsWrapper}>
            <p className={s.contactTitle}>{contactTitle}:</p>
            <p>{contactLink}</p>
        </div>
    )
}

export default PersonalInfo;