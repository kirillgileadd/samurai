import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'
import ProfileAside from "./ProfileAside/ProfileAside";
import ProfileActivity from "./ProfileActivity/ProfileActivity";
import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <div className={s.box}>
                <ProfileAside aside={props.aside}/>
                <MyPosts posts={props.state.posts}
                         newPostTest = {props.state.newPostTest}
                         dispatch={props.dispatch}/>
                <ProfileActivity/>
            </div>
        </div>
    );
}

export default Profile