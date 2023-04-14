import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 12;
  width: 100%;
  position: fixed;
  top: 0; /* add top: 0 to fix the component at the very top of the page */
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.h1`
  color: #FFFFFF;
  background-color: black;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-right: 1rem;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #d300ff;
  }
  &.active {
    color: #FFFFFF;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

