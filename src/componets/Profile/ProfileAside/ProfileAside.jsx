import React from 'react'
import s from './ProfileAside.module.scss'

const ProfileAside = () => {
   return (
      <div className={s.dialogs}>
          <div className={s.aside}>
              <div className={s.aside__inner}>
                  <div className={s.aside__nav}>
                      <div className={s.friends}>
                          <span className={s.friends__num}>1</span>
                          <p>Friends</p>
                      </div>
                      <div className={s.group}>
                          <span className={s.group__num}>6</span>
                          <p>Group</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   );
}

export default ProfileAside