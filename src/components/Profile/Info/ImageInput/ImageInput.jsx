import React from "react";
import s from './ImageInput.module.css'
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateProfilePhotoThunk} from "../../../../redux/profilePage-reducer";


let ImageInput = (props) => {
    let onFileSelected = (e) => {
        props.updateProfilePhotoThunk(e.target.files[0])
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <label className={s.fileInputWrapper}>
                <span>Click to select new</span>
                <input type="file" name='selectFile' onChange={onFileSelected}/>
            </label>
        </form>
    )
}

// let ImageInputReduxForm = reduxForm({form:'imageInput'})(ImageInput)


export default compose(
    connect(()=>{}, {updateProfilePhotoThunk}),
    reduxForm({form:'imageInput'})
)(ImageInput)

