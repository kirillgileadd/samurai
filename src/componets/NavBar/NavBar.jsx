import React from 'react'
import s from './NavBar.module.scss'
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';
import NavItem from "./NavItem/NavItem";


let ItemsData = [
    {name: 'Profile', address: '/profile'},
    {name: 'Activity', address: '/activity'},
    {name: 'Dialogs', address: '/dialogs'},
    {name: 'News', address: '/news'},
    {name: 'Music', address: '/music'},
    {name: 'Friends'},
    {name: 'Settings', address: '/settings'},
]



const NavBar = () => {
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
                                    <div className={s.friends}>
                                        <span className={s.friends__num}>1</span>
                                        <p>Friends</p>
                                    </div>
                                    <div className={s.group}>
                                        <span className={s.group__num}>6</span>
                                        <p>Group</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.bottom}>
                            <div className={s.bottom__inner}>
                                <NavItem name={ItemsData[0].name} adress={ItemsData[0].address}/>
                                <NavItem name={ItemsData[1].name} adress={ItemsData[1].address}/>
                                <NavItem name={ItemsData[2].name} adress={ItemsData[2].address}/>
                                <NavItem name={ItemsData[3].name} adress={ItemsData[3].address}/>
                                <NavItem name={ItemsData[4].name} adress={ItemsData[4].address}/>
                                <NavItem name={ItemsData[5].name} adress={ItemsData[5].address}/>
                                <NavItem name={ItemsData[5].name} adress={ItemsData[5].address}/>
                                <NavItem name={ItemsData[5].name} adress={ItemsData[5].address}/>
                                <NavItem name={ItemsData[6].name} adress={ItemsData[6].address}/>
                            </div>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </aside>

    );
}

export default NavBar