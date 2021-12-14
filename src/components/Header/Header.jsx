import React from 'react';
import { NavLink } from 'react-router-dom';
import  css from './Header.module.css';

const Header = (props) =>{
    return(
        <header className={css.header + ' flex jcsb aic'}>
            <div className={css.logo}>
                <img src="https://logojinni.com/ru/image/logos/react-446.svg" alt="logo" />
            </div>
            <div className={css.loginBlock + ' flex aic'}>
                <div className={css.authAvatar}>
                    <img src={
                        props.authAvatar === null 
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulDSF3olTEVxK5pO15lf9pQxBSBdtBin8pM9woDkK-O8P3k7fCeKYLSaUD_Z1on8dzhI&usqp=CAU"
                        : props.authAvatar
                    } alt="" />
                </div>
                {
                    props.isAuth 
                    ? <div>{props.login} - <span  className={css.authBtn} onClick={
                        props.logout}>Выйти</span></div>
                    : <NavLink to={'/login'}>
                        <span className={css.authBtn}>Войти</span>
                    </NavLink>
                }
                
            </div>
        </header>
    )
}
export default Header;