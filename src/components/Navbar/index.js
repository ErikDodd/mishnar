import React from 'react';
import {
    Nav,
    NavHeader,
    NavTitle,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';
// import Header from '../../Header';

const Navbar = () => {
    return (
        <>
        {/* <Header /> */}
                <Nav>
                    <NavHeader>
                        <NavTitle>
                            STYLE BY MISH - STYLING, ART, & CREATIVE DIRECTION
                        </NavTitle>
                    </NavHeader>
                    <Bars />
                    <NavMenu>
                        <NavLink to='/Fashion' activeStyle>
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
