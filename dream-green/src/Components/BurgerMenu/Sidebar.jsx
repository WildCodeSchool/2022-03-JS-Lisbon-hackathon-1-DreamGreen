import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

function Sidebar() {
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
}

export default Sidebar;
