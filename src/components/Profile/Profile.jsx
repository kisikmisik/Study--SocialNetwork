import React from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <Wallpaper />
            <Info />
            <Posts postsData={props.postsData} />
        </section>
    );
}

export default Profile;
