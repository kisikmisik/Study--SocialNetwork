import s from "../CurrentDialog/CurrentDialog.module.css";
import React from "react";
import SendMessageForm from "./SendMessageForm"
import dialogIcon from "./../../../assets/img/chat.svg"

let CurrentDialog = (props) => {
    let onSubmit = (formData) => {
        props.sendNewMessage(formData.messageInput, props.selectedDialogIndex)
        formData.messageInput = ''
    }
    return (
        <div className={s.dialogWrapper}>

            {props.selectedDialogIndex !== null ?
                <div className={s.messagesWrapper}>
                    {props.dialogsData[props.selectedDialogIndex].messages.map(message => { // map all the messages from selected dialog
                        return <p key={message.id} className={s[message.classSet]}>{message.message}</p>
                    })}
                </div>
                :
                <p className={s.selectNotification}>
                    <img src={dialogIcon} alt="chat icon" width="100"/>
                    <span>Select a dialog</span>
                </p>
            }
            {props.selectedDialogIndex !== null && <SendMessageForm onSubmit={onSubmit}/>}
        </div>
    )
}


export default CurrentDialog;

