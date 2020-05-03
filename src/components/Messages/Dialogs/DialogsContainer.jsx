import React from 'react';
import {NavLink} from "react-router-dom";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    // let peopleElements = props.store.getState().messagesPage.peopleData.map(element =>
    //     <li className={s.dialog}><NavLink to="messages/3">{element.name}</NavLink></li>);

    return (
        <Dialogs peopleData={props.store.getState().messagesPage.peopleData}/>
    );
}

export default DialogsContainer;
