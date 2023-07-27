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
            <NavTitle>STYLE BY MISH</NavTitle>
            {/* <NavTitle>
                        STYLING/ART/CREATIVE DIRECTION
                    </NavTitle> */}
          </NavHeader>
          <Bars />
          <NavMenu>
            <NavLink to="" activestyle="true">
              HOME
            </NavLink>
            <NavLink to="/Fashion" activestyle="true">
              FASHION
            </NavLink>
            <NavLink to="/Prop" activestyle="true">
              PROP
            </NavLink>
            <NavLink to="/Ecomm" activestyl="true" e>
              E-COMM
            </NavLink>
            <NavLink to="/Contact" activestyl="true">
              BIO/CONTACT
            </NavLink>
            <NavLink to="/Clients" activestyle="true">
              CLIENTS
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
};

export default Navbar;
