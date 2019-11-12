import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul className="navbar display-flex" id="navbar">
                    <li>
                        <Link className="navbar-link" to='/'>
                            <img className="logo" src="source\images\TrainerTD_Logo_White.png" />  
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-link" to='/contact'>
                            <p>Contact</p>
                        </Link>
                        
                    </li>
                    <li>
                        <Link className="navbar-link" to='/about'>
                            <p>About</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

function getScrollPosition() {
    let scrollPositionY = window.scrollY;
    console.log("scrollposition: ", scrollPositionY);
    changeBackgroundColor(scrollPositionY);
}

function changeBackgroundColor(position) {
    if (position >= 0 && position < 1000) {
        changeStyle('black');
    }
    else if (position >= 1000 && position < 2000) {
        changeStyle('rgb(40, 40, 40)');
    }
    else if (position >= 2000) {
        changeStyle('black');
    }
}

function changeStyle(color) {
    const navbar = document.getElementById('navbar');
    navbar.style.backgroundColor = color;
    navbar.style.transitionProperty = 'background-color';
    navbar.style.transitionDuration = '1s';
}

window.addEventListener("scroll", getScrollPosition);

export default Navbar;