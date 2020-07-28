import React, {useEffect, useState} from 'react';
import s from './Info.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhotoMock from '../../../assets/img/nobody_profile_image.jpg'
import ImageInput from "./ImageInput/ImageInput";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import PersonalInfoForm from "./PersonalInfo/PersonalInfoForm";

const Info = (props) => {
    let [editMode, changeEditMode] = useState(false)
    let [isFormError, changeIsFormError] = useState(false)
    let onSubmit = (formData) => {
        changeEditMode(false)
        let objectData = {
            ...formData, contacts: {
                facebook: formData.facebook,
                vk: formData.vk,
                instagram: formData.instagram,
                website: formData.website,
                twitter: formData.twitter,
                youtube: formData.youtube,
                github: formData.github
            }
        }
        props.saveProfileDataThunk(objectData)
    }

    let displayError = (errorMessage) => {
        if (errorMessage !== undefined) {
            return <p className={s.formError}>{errorMessage}</p>
        } else {
            changeIsFormError(true)
        }
    }

    if (!props.profileInfo) {
        return <Preloader/>
    } else {
        return (
            <section className={s.info}>
                <div className={s.imageWrapper}>
                    <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large : profilePhotoMock}
                         height="300" alt="profile pic" className={s.avatar}/>
                    {props.isProfileYours && editMode && <ImageInput/>}
                </div>

                {editMode ?
                    <PersonalInfoForm onSubmit={onSubmit}
                                      editMode={editMode}
                                      changeEditMode={changeEditMode}
                                      displayError={displayError}
                                      {...props} initialValues={props.profileInfo}/> :
                    <PersonalInfo {...props} editMode={editMode}/>}
                {props.isProfileYours && editMode === false &&
                <button onClick={() => {
                    changeEditMode(true)
                }} className={s.editButton}>Edit Profile</button>}
            </section>
        )
    }
}

export default Info;