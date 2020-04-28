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
                <Posts postAreaText={props.profilePage.postAreaText}
                       addPost={props.profilePage.addPost}
                       postsData={props.profilePage.postsData}
                       changePostText={props.profilePage.changePostText}/>
            </div>
        </section>
    );
}

export default Profile;
