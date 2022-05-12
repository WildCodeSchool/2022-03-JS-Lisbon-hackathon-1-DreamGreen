import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                About
            </a>
            <a className="menu-item" href="/services">
                Services
            </a>
            <a className="menu-item" href="/contacts">
                Contacts
            </a>

        </Menu>
    );
};

