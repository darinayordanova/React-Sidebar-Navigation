import React, { useState, useEffect, useContext } from 'react';
import { Nav, Accordion, Card, Button, useAccordionToggle } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
function ArrowToggle({ eventKey }) {
    const [open, setOpen] = useState(false)
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        setOpen(!open));

    return (
        <RiArrowDownSLine className={open ? "arrow expand" : "arrow"}
            onClick={decoratedOnClick}
        />

    );
}
function MenuItem({ menuItem }) {
    const MenuItemMain =
        <NavLink activeClassName="active" to={menuItem.path}>
            {menuItem.img ? <img className="usericon" src={menuItem.img} alt="userprofile"/> : null}
            {menuItem.name}
        </NavLink>
        ;

    var MenuItemInner = menuItem.items.length > 0 ? (
        menuItem.items.length > 0 ?
            menuItem.items.map((item, index) => (
                <MenuItem
                    key={item.id}
                    menuItem={item}
                />
            )) : null
    ) : null;
    return (
        <>
            {menuItem.items.length > 0 ?
                <Accordion>
                    <Card>
                        <Card.Header>
                            
                            {MenuItemMain}<ArrowToggle eventKey={menuItem.id} />
                        </Card.Header>


                        <Accordion.Collapse eventKey={menuItem.id}>
                            <Card.Body>
                                {MenuItemInner}

                            </Card.Body>
                        </Accordion.Collapse>


                    </Card>
                </Accordion>
                :
                <>
                    {MenuItemMain}
                    {MenuItemInner}
                </>
            }


        </>
    );
}

export default MenuItem;