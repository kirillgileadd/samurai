import React from 'react'
import ProfileNavItem from './ProfileNavItem/ProfileNavItem'
import s from './ProfileNavigation.module.scss'


const ProfileNavigation = () => {
   return (
      <div className={s.main}>
         <h3 className={s.text}>@kirillgilead</h3>
         <div className={s.list}>
            <ProfileNavItem content="Settings" />
            <ProfileNavItem content="Messages" />
            <ProfileNavItem content="News" />
            <ProfileNavItem content="Music" />
            <ProfileNavItem content="Friends" />
            <ProfileNavItem content="Settings" />
         </div>
      </div>
   );
}

export default ProfileNavigation