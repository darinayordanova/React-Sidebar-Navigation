import React, { useState } from "react";
import { Nav, Accordion, Card, Button, useAccordionToggle } from "react-bootstrap";
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { NavLink } from "react-router-dom";
import './style.css'
import MenuItem from "./MenuItem"
import logoBg from '../images/logo.svg'
import { menuLinks } from '../../data/menu'

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [menuItems] = useState(menuLinks)

  return (
    <div className="d-flex">
      <Nav defaultActiveKey="news" className={toggleMenu ? "flex-column active" : ' flex-column'}>
        <NavLink activeClassName="logo-active" to="/">
          <img src={logoBg} alt="logo" className="navLogo" />
        </NavLink>
        {
          menuItems.map((item) => {
            return <MenuItem
              key={item.id}
              menuItem={item}
            />
          })
        }

      </Nav>
      {
        toggleMenu ? <RiCloseLine className="menuIcon" onClick={() => setToggleMenu(!toggleMenu)} /> : <RiMenuLine className="menuIcon" onClick={() => setToggleMenu(!toggleMenu)} />
      }
    </div >
  );
};

