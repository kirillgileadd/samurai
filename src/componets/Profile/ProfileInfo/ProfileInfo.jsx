import React from 'react'
import s from './ProfileInfo.module.scss'
import Avatar from './Avatar/Avatar'
import ProfileNavigation from './ProfileNavigation/ProfileNavigation'

const ProfileInfo = () => {
   return (
      <div className={s.main}>
         <Avatar />
         <ProfileNavigation />
      </div>
   );
}

export default ProfileInfo