import React, {useState} from 'react';
import s from './Messages.module.css';
import {connect} from "react-redux";
import Interlocutors from "./Interlocutors/Interlocutors";
import CurrentDialog from "./CurrentDialog/CurrentDialog";
import {sendNewMessage} from "../../redux/messagesPage-reducer";
import photoMock from "../../assets/img/photoMock.png"

const Messages = (props) => {
    let [selectedDialogIndex, changeSelectedDialogIndex] = useState(null)

    // catches index of dialog that has been clicked
    let selectDialog = (evt) => {
        for (let i = 0; i < props.dialogsData.length; i++) {
            if (props.dialogsData[i].name === evt.target.innerText) {
                changeSelectedDialogIndex(i)
            }
        }
    }
    return (
        <section className={s.myMessages}>
            <Interlocutors {...props} selectDialog={selectDialog} photoMock={photoMock}/>
            <CurrentDialog {...props} selectedDialogIndex={selectedDialogIndex}/>
        </section>
    );
}

let mapStateToProps = (state) => ({
    dialogsData: state.messagesPage.dialogsData
})

export default connect(mapStateToProps, {sendNewMessage})(Messages)
