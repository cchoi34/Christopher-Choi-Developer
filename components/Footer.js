import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
                <footer>
                    <a href="https://github.com/cchoi34" target="_blank" >
                        <i className="fa fa-github fa-2x icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/christopher-choi97/" target="_blank" >
                        <i className="fa fa-linkedin fa-2x icon" />
                    </a>
                </footer>
        )
    }
}

export default Footer;