import React from 'react'
import s from './../Dialogs.module.scss'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialogs__box}>
            <NavLink to={"/dialogs/" + props.id} className={s.dialog__link}>
                <div className={s.avatar}>
                    <img
                        src="https://sun9-87.userapi.com/impf/c856132/v856132453/4f0a8/ma1XnwebidI.jpg?size=1773x1773&quality=96&sign=c908a551513768ec0b69e09f9999e35e&type=album"
                        alt=""/>
                </div>
                <div className={s.name}>
                    <div className={s.username}>
                        {props.username}
                    </div>
                    <div className={s.online}>
                        {props.online}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}



export default DialogItem