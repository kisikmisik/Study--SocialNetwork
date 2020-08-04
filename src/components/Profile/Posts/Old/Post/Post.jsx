import React, {useState} from 'react';
import s from './Post.module.css';
import likeIcon from './../../../../../assets/img/heart.svg'
import likedLikeIcon from './../../../../../assets/img/heart-blue.svg'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.labelWrapper}>
                <img src={props.photo}
                     alt="avatar" height="40" className={s.postImage}/>
                <span className={s.profileName}>{props.name}</span>
            </div>
            <p className={s.message}>{props.message}</p>
            <p className={s.likes} onClick={props.likeToggle}>
                {props.isLiked ? <img src={likedLikeIcon} alt="likes count" width='18px'/>
                : <img src={likeIcon} alt="likes count" width='18px'/>}
                {props.isLiked ? props.likes + 1 : props.likes}
            </p>
        </div>
    )
}

const PostContainer = (props) => {
    let [isLiked, toggleIsLiked] = useState(false);

    let likeToggle = (e) => {
        if (isLiked === false) {
            toggleIsLiked(true)
        } else {
            toggleIsLiked(false)
        }
    }
    return <Post {...props} likeToggle={likeToggle} isLiked={isLiked}/>
}

export default PostContainer;