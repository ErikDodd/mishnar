import React from 'react';
import {
    Nav,
    NavHeader,
    NavTitle,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavHeader>
                    <NavTitle className="title">
                        STYLE BY MISH STYLING/ART/CREATIVE DIRECTION
                    </NavTitle>
                </NavHeader>
                <Bars />
                <NavMenu>
                    <NavLink to='/Fashion'activeStyle>
                        FASHION
                    </NavLink>
                    <NavLink to='/Prop' activeStyle>
                        PROP
                    </NavLink>
                    <NavLink to='/Ecomm' activeStyle>
                        E-COMM
                    </NavLink>
                    <NavLink to='/Contact' activeStyle>
                        BIO/CONTACT
                    </NavLink>
                    <NavLink to='/Clients' activeStyle>
                        CLIENTS
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;
