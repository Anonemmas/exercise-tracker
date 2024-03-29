import React, {Component} from "react"
import { Link } from 'react-router-dom'

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand"to="/">Exercise Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Exercises <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Create Exercise Log</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user">Create User</Link>
                </li>
                </ul>
            </div>
</nav>
        )
    }
}
