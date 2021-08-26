import React from 'react'
import s from './NavItem.module.scss'
import {Link, NavLink} from "react-router-dom";

const NavItem = (props) => {

    let path = '' + props.address
    return (
        <div className={s.inner}>
            <NavLink to={path} className={s.link} activeClassName={s.active} >
                <img />
                <span className={s.name}>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default NavItem