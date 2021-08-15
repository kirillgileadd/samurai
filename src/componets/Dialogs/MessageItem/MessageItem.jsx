import React from 'react'
import s from './../Dialogs.module.scss'

const MessageItem = (props) => {
    return (
        <div className={s.main}>
            {props.message}
        </div>
    );
}



export default MessageItem