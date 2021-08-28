import React from 'react'
import ProfileNavItem from './ProfileNavItem/ProfileNavItem'
import s from './ProfileNavigation.module.scss'


const ProfileNavigation = () => {
   return (
      <div className={s.main}>
         <h3 className={s.text}>@kirillgilead</h3>
         <div className={s.list}>
            <ProfileNavItem content="Settings" id='1'/>
            <ProfileNavItem content="Messages" id='2'/>
            <ProfileNavItem content="News" id='3'/>
            <ProfileNavItem content="Friends" id='4'/>
            <ProfileNavItem content="Friends" id='5'/>
         </div>
      </div>
   );
}

export default ProfileNavigation