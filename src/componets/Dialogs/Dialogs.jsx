import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import SimpleBar from "simplebar-react";
import {addMessageChange, onMessageChaneChange} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem username={el.username} id={el.id}
                                                                    online={el.online}/>)
    let messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message}/>)


    let sendMessage = () => {
        props.dispatch(addMessageChange ())
    }

    let onChangeMessage = (e) => {
        let body = e.target.value
        props.dispatch(onMessageChaneChange (body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.box}>
                <div className={s.left}>
                    <h4 className={s.dialog__title}>
                        Dialogs
                    </h4>
                    <SimpleBar className={s.simpleBar}>
                        <div className={s.list}>
                            {dialogsElements}
                        </div>
                    </SimpleBar>
                </div>
                <div className={s.right}>
                    <div className={s.messages}>
                        <div className={s.messageNav}>
                            <div className={s.messageNav__info}>
                                <p className={s.username}>
                                    Krill Gilead
                                </p>
                                <p className={s.lastOnline}>
                                    1 minute ago
                                </p>
                            </div>
                            <div className={s.messageNav__btns}>
                                <button className={s.itemBtn}>
                                    1
                                </button>
                                <button className={s.itemBtn}>
                                    2
                                </button>
                                <button className={s.itemBtn}>
                                    3
                                </button>
                            </div>
                        </div>
                        <SimpleBar className={s.simpleBarContent}>
                            <div className={s.massaages}>
                                <div className={s.message__item}>
                                    {messagesElements}
                                </div>

                            </div>
                        </SimpleBar>
                        <div className={s.input}>
                            <button className={s.attach}>
                                A
                            </button>
                            <textarea value={props.state.newMessageText} onChange={ onChangeMessage }
                                      placeholder='Write a message' className={s.inputMessage}>
                            </textarea>
                            <button onClick={ sendMessage } className={s.attach} >
                                S
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs