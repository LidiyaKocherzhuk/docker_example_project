import { Outlet, NavLink } from "react-router-dom";

import logo from '../../img/logo.svg';
import './Logo.css';

const Logo = () => {

    return (
        <div className="App">
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome to my site.
                </p>

                <NavLink to='login' className="App-link">Log In</NavLink>
                <NavLink to='registration' className="App-link">Registration</NavLink>

                <Outlet/>

            </header>

        </div>
    );
}
export {Logo};
