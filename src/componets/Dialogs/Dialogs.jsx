import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem username={el.username} id={el.id} online={el.online}/>)
    let messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <h3 className={s.dialog__title}>
                    Dialogs
                </h3>
                <div className={s.box}>
                    <div className={s.list}>
                        {dialogsElements}
                    </div>
                    <div className={s.messages}>
                        <div className={s.message__item}>
                            {messagesElements}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs