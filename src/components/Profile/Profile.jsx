import React from 'react';
import Info from './Info/Info';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <div className={s.wrapper}>
                <Info {...props} />
                <Posts {...props}/>
            </div>
        </section>
    );
}

export default Profile;
