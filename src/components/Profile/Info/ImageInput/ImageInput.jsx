import React from "react";
import s from './ImageInput.module.css'
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";
import {updateProfilePhotoThunk} from "../../../../redux/profilePage-reducer";


let ImageInput = (props) => {
    let onFileSelected = (e) => {
        props.updateProfilePhotoThunk(e.target.files[0])
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="file" name='selectFile' onChange={onFileSelected}/>
        </form>
    )
}

// let ImageInputReduxForm = reduxForm({form:'imageInput'})(ImageInput)


export default compose(
    connect(()=>{}, {updateProfilePhotoThunk}),
    reduxForm({form:'imageInput'})
)(ImageInput)

