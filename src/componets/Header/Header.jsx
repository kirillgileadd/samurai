import React from 'react'
import s from './Header.module.scss'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.header__box}>
            <div className={s.header__inner}>
               <nav className={s.header__nav}>
                  <input className={s.header__input} placeholder="Search" />
                  <ul className={s.header__icons}>
                     <li className={s.item}>
                        <a className={`${s.link} ${s.active}`} href='#'>
                           <i class="fas fa-user"></i>
                        </a>
                     </li>
                     <li className={s.item}>
                        <a className={s.link} href='#'>
                           <i class="fas fa-bell"></i>
                        </a>
                     </li>
                     <li className={s.item}>
                        <a className={s.link} href='#'>
                           <i class="fas fa-envelope-open"></i>
                        </a>
                     </li>
                     <li className={s.item}>
                        <a className={s.link} href='#'>
                           <i class="fas fa-shopping-cart"></i>
                        </a>
                     </li>
                     <li className={s.item}>
                        <a className={`${s.link} ${s.active}`} href="#">
                           <img src="" alt="" />
                           <p>@kirillgilad</p>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}

export default Header