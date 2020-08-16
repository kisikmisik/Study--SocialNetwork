import React from 'react';
import s from './NewPost.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utilities/validators";

let maxLength100 = maxLengthCreator(100);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.wrapper}>
            <Field validate={[required, maxLength100]} name='currentText' component={Textarea} placeholder="What's new?"/>
            <button type='submit'>Post</button>
        </form>
    )
}

let NewPostReduxForm = reduxForm({form: 'addPost'}) (NewPostForm)

export default NewPostReduxForm;