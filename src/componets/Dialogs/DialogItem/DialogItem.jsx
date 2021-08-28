import React from 'react'
import s from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={s.dialog__link}>
                <div className={s.avatar}>
                    <img className={s.avatarImg}
                         src="https://sun9-23.userapi.com/impg/aDm5hUDC1uzGJuKRILsfmQyqd226DTJM9qHPFA/eb5FaTyY9b4.jpg?size=1200x1600&quality=96&sign=08ff2da1168f03ed98095734372acb40&type=album"
                         alt=""/>
                </div>
                <div className={s.name}>
                    {props.username}
                </div>
            </NavLink>
        </div>
    );
}


export default DialogItem