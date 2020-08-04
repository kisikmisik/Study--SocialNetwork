import s from "../Conversation.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utilities/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

let maxLength50 = maxLengthCreator(50);

let MessagesForm = (props) => {
        return <form onSubmit={props.handleSubmit} className={s.inputWrapper}>
            <Field component={Textarea} className={s.input} name='currentMessage' placeholder={'type here..'}/>
            <button>Отправить</button>
        </form>
}

let MessagesReduxForm = reduxForm({form: 'sendMessage'}) (MessagesForm)

export default MessagesReduxForm