import React from 'react';
import s from './Wallpaper.module.css';

const Wallpaper = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.wallpaper}
                src="https://images8.alphacoders.com/102/1026968.jpg"
                alt="wallpaper" height="400" />
        </div>
    )
}

export default Wallpaper;