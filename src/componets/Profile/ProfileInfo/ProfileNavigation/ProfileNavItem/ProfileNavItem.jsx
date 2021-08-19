import React from 'react'
import s from './ProfileNavItem.module.scss'

const ProfileNavItem = (props) => {
   return (
      <div className={s.main}>
         <a className={s.link} href="#">
            <span className={s.text}>{props.content}</span>
         </a>
      </div>
   );
}

export default ProfileNavItem