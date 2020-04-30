import React from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Wallpaper />
            <div className={s.wrapper}>
                <Info />
                <Posts dispatch={props.dispatch}
                       state={props.state}/>
            </div>
        </section>
    );
}

export default Profile;
