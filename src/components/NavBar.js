import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/cart' className="ml-0">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        سبد خرید
                    </ButtonContainer>
                </Link>
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand mr-5"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            محصولات
                        </Link>
                    </li>
                </ul>
                
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: rgb(232, 152, 14) !important;
    /* background: var(--mainBlue); */
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
