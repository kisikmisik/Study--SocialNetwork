

import React from 'react';
import s from './Avatar.module.css';

const Avatar = () => {
    return (
        <img src="https://i.pinimg.com/originals/6a/72/7e/6a727eb17e38eb87432fef010b2a1221.jpg"
             height="300" alt="profile pic" className={s.avatar} />
    )
}

export default Avatar;