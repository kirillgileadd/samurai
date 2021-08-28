import React from 'react'
import s from './ProfileNavItem.module.scss'
import {NavLink} from "react-router-dom";

const ProfileNavItem = (props) => {
   return (
      <div className={s.main}>
         <NavLink to={'/profile/' + props.id} className={s.link} activeClassName={s.active}>
            {props.content}
         </NavLink>
      </div>
   );
}

export default ProfileNavItem