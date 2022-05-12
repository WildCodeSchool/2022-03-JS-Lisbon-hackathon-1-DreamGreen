import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";



function Sidebar() {
    return (

        <div>
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
                <a className="menu-item" href="/footer">
                    Footer
                </a>
            </Menu>
        </div>



    );
}

export default Sidebar;
