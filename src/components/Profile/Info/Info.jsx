import React from 'react';
import s from './Info.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhotoMock from '../../../assets/img/nobody_profile_image.jpg'
import ImageInput from "./ImageInput/ImageInput";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import PersonalInfoForm from "./PersonalInfo/PersonalInfoForm";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false, // if true - edit form shows instead of info block
            isFormError: false, // if true - form does not save changes
            isChangesLoading: false // if true - save changes button is disabled
        };
    }

    changeEditMode = (status) => {
        this.setState({editMode: status})
    }
    changeFormErrorStatus = (status) => {
        this.setState({isFormError: status})
    }
    initialFormValues = () => {
        let profileInfo = this.props.profileInfo
        return { ...profileInfo,
            facebook: profileInfo.contacts.facebook,
            vk: profileInfo.contacts.vk,
            website: profileInfo.contacts.website,
            twitter: profileInfo.contacts.twitter,
            instagram: profileInfo.contacts.instagram,
            github: profileInfo.contacts.github,
            youtube: profileInfo.contacts.youtube,
            mainLink: profileInfo.contacts.mainLink
        }
    }

    render() {
        let onSubmit = (formData) => {
            // making deep copy of formData obj to save contacts also
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
            this.setState({isChangesLoading: true})
            this.props.saveProfileDataThunk(objectData)
                .then(() => {
                    this.changeEditMode(false)
                    this.setState({isChangesLoading: false})
                })
        }

        let displayError = (errorMessage) => {
            if (errorMessage !== undefined) {
                return <p className={s.formError}>{errorMessage}</p>
            } else {
                this.changeFormErrorStatus(true)
            }
        }
        if (!this.props.profileInfo) {
            return <Preloader/>
        } else {
            return (
                <section className={s.info}>
                    <div className={s.imageWrapper}>
                        <img
                            src={this.props.profileInfo.photos.large ? this.props.profileInfo.photos.large : profilePhotoMock}
                            height="300" alt="profile pic" className={s.avatar}/>
                        {this.props.isProfileYours && this.state.editMode && <ImageInput/>}
                    </div>

                    {this.state.editMode ?
                        <PersonalInfoForm onSubmit={onSubmit}
                                          isChangesLoading={this.state.isChangesLoading}
                                          editMode={this.state.editMode}
                                          changeEditMode={this.changeEditMode}
                                          displayError={displayError}
                                          {...this.props}
                                          initialValues={this.initialFormValues()}/> :
                        <PersonalInfo {...this.props} editMode={this.editMode}/>}
                    {this.props.isProfileYours && this.state.editMode === false &&
                    <button onClick={() => {
                        this.changeEditMode(true)
                    }} className={s.editButton}>Edit Profile</button>}
                </section>
            )
        }
    }
}

export default Info;