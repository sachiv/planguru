import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {

    const toggleNavbar = (e) => {
        // Get the target from the "data-target" attribute
        const target = e.currentTarget.dataset.target, $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        e.currentTarget.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <Link className="navbar-item" to='/'>
                    PlanGuru
                </Link>
                <div className="navbar-burger burger" data-target="navbar" onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbar" className="navbar-menu">
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <NavLink exact to='/' className='navbar-item' activeClassName='is-active'>Home</NavLink>
                    <NavLink exact to='/about-us' className='navbar-item' activeClassName='is-active'>About</NavLink>
                    <NavLink exact to='/events' className='navbar-item' activeClassName='is-active'>Events</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;