import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.scss'


const MyPosts = (props) => {



    let postsElements = props.posts.map( (el) =>  <Post massege={el.massage} like={el.likeCounter}/>)

   return (
      <div className={s.MyPosts}>
         <span>Posts</span>
          {postsElements}
      </div>
   );
}


export default MyPosts