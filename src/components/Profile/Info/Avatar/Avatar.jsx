

import React from 'react';
import s from './Avatar.module.css';

const Avatar = () => {
    return (
        <img src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg"
            alt="profile picture" class={s.avatar} />
    )
}

export default Avatar;