import s from "../Conversation.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilities/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

let maxLength50 = maxLengthCreator(50);

let MessagesForm = (props) => {
        return <form onSubmit={props.handleSubmit} className={s.inputWrapper}>
            <Field validate={[required, maxLength50]} component={Textarea} className={s.input} name='currentMessage'/>
            <button>Отправить</button>
        </form>
}

let MessagesReduxForm = reduxForm({form: 'sendMessage'}) (MessagesForm)

export default MessagesReduxForm