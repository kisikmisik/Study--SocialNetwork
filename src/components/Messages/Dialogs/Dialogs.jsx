import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import profileImage from '../../../assets/img/nobody_profile_image.jpg';

const Dialogs = (props) => {
    let PeopleElements = props.peopleData.map(element =>
        <li key={element.id} className={s.dialog}>
            <NavLink to={'/messages/' + element.id}>
                <img src={profileImage} alt={element.name + "'s photo"} width='50px' className={s.profilePhoto}/>
                <span className={s.profileName}>{element.name}</span>
            </NavLink>
        </li>);
    return (
        <ul className={s.dialogs}>
            {PeopleElements}
        </ul>
    );
}

export default Dialogs;
