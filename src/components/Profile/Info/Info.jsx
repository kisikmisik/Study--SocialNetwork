import React from 'react';
import s from './Info.module.css';
import Preloader from "../../common/Preloader/Preloader";
import profilePhotoMock from '../../../assets/img/nobody_profile_image.jpg'

const Info = (props) => {

    if (!props.profileInfo) {
        return <Preloader/>
    } else {
        return (
            <section className={s.info}>
                <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large : profilePhotoMock}
                     height="300" alt="profile pic" className={s.avatar}/>

                <div className={s.personal}>
                    <h2 className={s.name}>{props.profileInfo.fullName}</h2>
                    <p className={s.status}>{props.profileInfo.aboutMe}</p>
                    <table className={s.table}>
                        <tr>
                            <td>Job seeker:</td>
                            <td>{props.profileInfo.lookingForAJob ? <span>Yes</span> : <span>No</span>}</td>
                        </tr>
                        <tr>
                            <td>Facebook:</td>
                            <td>{props.profileInfo.contacts.facebook}</td>
                        </tr>
                        <tr>
                            <td>Website:</td>
                            <td>{props.profileInfo.contacts.website}</td>
                        </tr>
                        <tr>
                            <td>Instagram:</td>
                            <td>{props.profileInfo.contacts.instagram}</td>
                        </tr>
                        <tr>
                            <td>VK:</td>
                            <td>{props.profileInfo.contacts.vk}</td>
                        </tr>
                        <tr>
                            <td>Twitter:</td>
                            <td>{props.profileInfo.contacts.twitter}</td>
                        </tr>
                        <tr>
                            <td>Youtube</td>
                            <td>{props.profileInfo.contacts.youtube}</td>
                        </tr>
                        <tr>
                            <td>GitHub:</td>
                            <td>{props.profileInfo.contacts.github}</td>
                        </tr>
                    </table>
                </div>
            </section>
        )
    }


}

export default Info;