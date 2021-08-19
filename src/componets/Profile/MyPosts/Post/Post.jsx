import React from 'react'
import s from './Post.module.scss'

const Post = (props) => {

   return (
      <div>
         <img className={s.img} src="https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/94/74/1e/94741ee9-bb3c-4c9f-da27-e04d9878faae/075679797032.jpg/486x486bb.png" />
         {props.massege}
         <span className={s.like}>like {props.like}</span>
      </div>
   );
}

export default Post