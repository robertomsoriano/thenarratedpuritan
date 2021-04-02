import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const MyNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <style jsx>{`
                .navbar{
                    background-color: red !important;
                    }
            `}</style>
            <Navbar light expand="md" className={`navbar mx-md-5`}>
                <NavbarBrand href="/" className={`logo`}>TNP</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className={`mx-auto`}>
                    <Nav className="mx-auto" navbar>
                        <NavItem>
                            <NavLink href="/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Narrations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Blog</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Contact</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MyNav;