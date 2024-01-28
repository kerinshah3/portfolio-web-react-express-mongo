import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'



class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper green green-text" >
                        <Link to="/" className="brand-logo left"> Kerin Shah  </Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/education">Education</Link></li>
                            <li><Link to="/projectPortfolio">Project Portfolio</Link></li>
                            <li><Link to="/financePortfolio">Finance Portfolio</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
