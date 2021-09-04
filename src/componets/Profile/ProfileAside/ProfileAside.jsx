import React from 'react'
import s from './ProfileAside.module.scss'
import ProfileItem from "../../NavBar/ProfileItem/ProfileItem";


const ProfileAside = (props) => {

    let itemsProfile = props.aside.asideItems.map( el => <ProfileItem name={el.name} num={el.num}/>)

   return (
          <div className={s.aside}>
              <div className={s.aside__inner}>
                  <div className={s.aside__nav}>
                      {itemsProfile}
                  </div>
                  <h4 className={s.photos}>
                      My Photos
                  </h4>
                  <div className={s.photosBox}>
                      <img className={s.img} src="https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album" alt=""/>
                      <img className={s.img} src="https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album" alt=""/>
                      <img className={s.img} src="https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album" alt=""/>
                      <img className={s.img} src="https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album" alt=""/>
                      <img className={s.img} src="https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album" alt=""/>
                      <img className={s.img} src="https://sun9-83.userapi.com/impg/0Py7b35ZneSg24Kn5m0u-8RlKzzprgN3G5ARSQ/od_gFOjTWqc.jpg?size=2560x1707&quality=96&sign=7bcf200be5fc8dbcbc50aa20bdeacd3a&type=album" alt=""/>
                  </div>
              </div>
          </div>
   );
}

export default ProfileAside