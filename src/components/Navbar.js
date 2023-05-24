import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //show btn when width is less or equal 960
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    //fixed problem with rendering button after page reload
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL
                    </Link>
                    {/* Menu icons change */}
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? (
                            <div className='x-icon'> {/* x-icon display after click */}
                                <div className='line'></div>
                                <div className='line'></div>
                            </div>
                        ) : (
                            <>
                                <div className='threline-icon'>
                                    <div className="line"></div> {/* all this lines below is menu icon lines */}
                                    <div className="line"></div> {/* they are displyed by default */}
                                    <div className="line"></div>
                                </div>
                            </>
                        )}
                    </div>
                    {/* navbar buttons */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Services" className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/Products" className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar