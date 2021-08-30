import React from 'react'
import Post from './Post/Post'
import s from './MyPosts.module.scss'



const MyPosts = (props) => {


    let postsElements = props.posts.map((el) => <Post massege={el.massage} like={el.likeCounter}/>)
    let newRefElement = React.createRef();

    let addPost = () => {
            props.addPost()
    }

    let onPostChange = () => {
        let text = newRefElement.current.value
            props.updateNewPostText(text)
    }

    return (
        <div className={s.MyPosts}>
            <div className={s.menu}>
                <div className={s.menu__item + ' ' + s.active}>
                    Personal
                </div>
                <div className={s.menu__item}>
                    Favorites
                </div>
                <div className={s.menu__item}>
                    Friends
                </div>
                <div className={s.menu__item}>
                    Groups
                </div>
            </div>
            <div className={s.input}>
                <div className={s.input__inner}>
                    <div className={s.content}>
                        <img className={s.userImg}
                             src="https://sun9-76.userapi.com/impg/c854028/v854028333/2382d8/QicB3rqwSYI.jpg?size=814x1600&quality=96&sign=d41992ffdb751a56ad5ce80c283bc2c8&type=album"
                             alt=""/>
                        <textarea  value={props.newPostTest} ref={newRefElement} onChange={ onPostChange } cols="30" className={s.text}>

                        </textarea>
                        <div className={s.attach}>
                            <div className={s.attach__item}>
                                R
                            </div>
                            <div className={s.attach__item}>
                                S
                            </div>
                        </div>
                    </div>

                    <div className={s.flexBox}>
                        <button onClick={ addPost } className={s.button} >
                            Add Post
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}


export default MyPosts