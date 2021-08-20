import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'

const Profile = (props) => {

   return (
      <div className={s.profile}>
         <ProfileInfo />
         <div className={s.box}>
            <div className={s.aside}>
               aside
            </div>
            <MyPosts posts={props.state.posts} />
            <div className={s.activity}>
               activity
            </div>
         </div>
      </div>
   );
}

export default Profile