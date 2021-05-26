import React from 'react';
import './Header.css';
import { BusinessCenter, Chat,Notifications, Home, Search, SupervisorAccount } from '@material-ui/icons';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
    const dispatch = useDispatch();
    const logoutme = ()=>{
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
                <div className="header__search">
                    <Search style={{color:'black'}} />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions className="icons" Icon={Home} title="Home" />
                <HeaderOptions className="icons" Icon={SupervisorAccount} title="My Networks" />
                <HeaderOptions className="icons" Icon={BusinessCenter} title="Jobs" />
                <HeaderOptions className="icons" Icon={Chat} title="Messaging" />
                <HeaderOptions className="icons" Icon={Notifications} title="Notification" />
                <HeaderOptions avatar={true}  title="Me" onClick={logoutme}/>
            </div>
            <div className="header__right__mobile">
                <HeaderOptions avatar={true}  title="Me" onClick={logoutme}/>
            </div>
        </div>
    )
}

export default Header
