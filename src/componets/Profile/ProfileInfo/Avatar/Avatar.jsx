import React from 'react'
import s from './Avatar.module.scss'

const Avatar = () => {
   return (
      <div className={s.main}>
         <img className={s.img} src="https://sun9-76.userapi.com/impg/c854028/v854028333/2382d8/QicB3rqwSYI.jpg?size=814x1600&quality=96&sign=d41992ffdb751a56ad5ce80c283bc2c8&type=album" />
         <p className={s.name}>Kirill Gilead</p>
      </div>
   );
}

export default Avatar