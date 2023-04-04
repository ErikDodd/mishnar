import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/Fashion' activeStyle>
                        Fashion
                    </NavLink>
                    <NavLink to='/Prop' activeStyle>
                        Prop
                    </NavLink>
                    <NavLink to='/Ecomm' activeStyle>
                        E-Comm
                    </NavLink>
                    <NavLink to='/Contact' activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to='/Clients' activeStyle>
                        Clients
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;
