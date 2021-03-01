import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png' />
        <div className={s.loginBlock}>
            {props.isAutn ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
    </header>
}

export default Header;