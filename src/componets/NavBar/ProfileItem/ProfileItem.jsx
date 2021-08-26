import React from 'react'
import s from './../NavBar.module.scss'

const ProfileItem = (props) => {
    return (
        <div className={s.profileItem}>
            <span className={s.profileItem__num}>{props.num}</span>
            <p>{props.name}</p>
        </div>
    );
}

export default ProfileItem