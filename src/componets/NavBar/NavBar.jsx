import React from 'react'
import s from './NavBar.module.scss'
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import NavItem from "./NavItem/NavItem";
import ProfileItem from "./ProfileItem/ProfileItem";


const NavBar = (props) => {

    let itemsElements = props.state.navItems.map(el => <NavItem name={el.name} address={el.address}/>)
    let itemsProfile = props.state.aside.map( el => <ProfileItem name={el.name} num={el.num}/>)

    return (
        <aside className={s.aside}>
            <div className={s.wrapper}>
                <SimpleBar className={s.simplebarContent}>
                    <div className={s.content}>
                        <div className={s.top}>
                            <a className={s.logo__link}>
                                <img className={s.logo}
                                     src="https://mythemestore.com/beehive-preview/wp-content/themes/beehive/assets/images/logo-vertical.svg"/>
                            </a>
                            <div className={s.profile}>
                                <a className={s.avatar__link}>
                                    <img className={s.avatar}
                                         src="https://sun9-76.userapi.com/impg/c854028/v854028333/2382d8/QicB3rqwSYI.jpg?size=814x1600&quality=96&sign=d41992ffdb751a56ad5ce80c283bc2c8&type=album"/>
                                </a>
                                <a className={s.username__link}>
                                    <span className={s.username}>
                                        Kirilll Gilead
                                    </span>
                                </a>
                                <p className={s.usertype}>
                                    Member
                                </p>
                                <div className={s.profile__nav}>
                                    {itemsProfile}
                                </div>
                            </div>
                        </div>
                        <div className={s.bottom}>
                            <div className={s.bottom__inner}>
                                {itemsElements}
                            </div>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </aside>

    );
}

export default NavBar