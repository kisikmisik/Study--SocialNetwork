import React, {useEffect, useState} from "react";
import s from './../PersonalInfo/PersonalInfo.module.css';
// this is how we use fc instead of class (hooks)
let ProfileStatus = (props) => {
    let [editMode, changeEditMode] = useState(false);
    let [userStatus, changeUserStatus] = useState(props.userStatus)

    let activateEditMode = () => {
        changeEditMode(true)
    }

    let deactivateEditMode = () => {
        changeEditMode(false)
        props.updateStatusThunk(userStatus)
    }

    let onChangeInput = (e) => {
        changeUserStatus(e.currentTarget.value);
    }

    useEffect(() => {changeUserStatus(props.userStatus)}, [props.userStatus])


    return (
        <div className={s.status} onClick={activateEditMode} onBlur={deactivateEditMode}>
            {
                editMode ?
                    <input onChange={onChangeInput} autoFocus={true} type="text"
                           value={userStatus} className={s.statusInput}/> :
                    <span className={s.statusText}>{props.userStatus ? props.userStatus : "No status"}</span>
            }
        </div>
    )
}

export default ProfileStatus