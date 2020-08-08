import s from "../Interlocutors/Interlocutors.module.css";
import React from "react";


let Interlocutors = (props) => {
    return (
        <div className={s.peopleWrapper}>
            {props.dialogsData.map(dialog => {
                return (
                    <p key={dialog.id}
                       className={s.dialog}
                       onClick={props.selectDialog}>
                        <img src={dialog.photo ? dialog.photo : props.photoMock} alt="photo" width='45' className={s.dialogPhoto}/>
                        <span>{dialog.name}</span>
                    </p> // map all the people with whom we had dialog
                )
            })}
        </div>
    )
}

export default Interlocutors;

