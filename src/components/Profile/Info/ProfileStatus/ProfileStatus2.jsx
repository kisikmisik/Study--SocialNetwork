import React, {useState} from "react";
import s from './../Info.module.css';

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


    return (
        <div className={s.status} onClick={activateEditMode} onBlur={deactivateEditMode}>
            {
                editMode ?
                    <input onChange={onChangeInput} autoFocus={true} type="text"
                           value={userStatus}/> :
                    <span className={s.statusText}>{props.userStatus ? props.userStatus : "No status"}</span>
            }
        </div>
    )
}

export default ProfileStatus