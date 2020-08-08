import s from "../CurrentDialog/CurrentDialog.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

let SendMessage = (props) => {
    return (
        <form className={s.messageInputWrapper} onSubmit={props.handleSubmit}>
            <Field name={'messageInput'} placeholder='Type message here..' component={Textarea} className={s.messagesInput} />
            <button className={s.sendMessageBtn}>Send</button>
        </form>
    )
}

let SendMessageForm = reduxForm({form: 'sendMessage'})(SendMessage)
export default SendMessageForm;