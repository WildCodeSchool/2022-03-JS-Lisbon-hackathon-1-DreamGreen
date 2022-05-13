import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <Menu>
        <a className="menu-item" href="#about">
          About
        </a>
        <a className="menu-item" href="#schedule">
          Schedule Collection
        </a>
        <a className="menu-item" href="#services">
          Services
        </a>
        <a className="menu-item" href="#footer ">
          Contacts
        </a>
      </Menu>
    </div>
  );
}

export default Sidebar;
