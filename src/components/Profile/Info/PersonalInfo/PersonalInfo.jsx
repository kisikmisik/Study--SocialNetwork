import React, {useEffect} from 'react';
import s from './PersonalInfo.module.css';
import ProfileStatus from "./../ProfileStatus/ProfileStatus2";

const PersonalInfo = (props) => {
    useEffect(()=>{}, [props])
    return (
        <div className={s.personal}>
            <h2 className={s.name}>{props.profileInfo.fullName}</h2>
            <ProfileStatus isProfileYours={props.isProfileYours} userStatus={props.userStatus} updateStatusThunk={props.updateStatusThunk}/>
            <table className={s.table}>
                <tbody>
                <tr>
                    <td>Job seeker:</td>
                    <td>{props.profileInfo.lookingForAJob ? <span>Yes</span> : <span>No</span>}</td>
                </tr>
                <tr>
                    <td>Position:</td>
                    <td>{props.profileInfo.lookingForAJobDescription}</td>
                </tr>
                <tr>
                    <td>About me:</td>
                    <td>{props.profileInfo.aboutMe}</td>
                </tr>
                <tr>
                    <td>Contacts:</td>
                    <td>{Object.keys(props.profileInfo.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactLink={props.profileInfo.contacts[key]}/>
                    })}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

let Contact = ({contactTitle, contactLink}) => {
    return (
        <tr>
            <td>{contactTitle}:</td>
            <td>{contactLink}</td>
        </tr>
    )
}

export default PersonalInfo;