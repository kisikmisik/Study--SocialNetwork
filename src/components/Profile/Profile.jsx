import React from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <section className={s.profile}>
            <Wallpaper />
            <Info />
            <Posts />
        </section>
    );
}

export default Profile;
