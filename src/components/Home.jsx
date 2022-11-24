import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import SingnIn from './SignIn'

export default class Home extends Component {
    render() {
        const navStyle = {
            listStyleType: "none",
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px 10px 0 0",
        }
        const liStyle = {
            padding: "10px",
        }
        const btnStyle = {
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "10px",
            fontSize: "1em",
            fontWeight: "600",
        }
        return ( 
            <nav>
                
                <ul style={navStyle}>
                    <li style={liStyle}><Link to="/SignIn"><button style={btnStyle}>Singn In</button></Link></li>
                    <li style={liStyle}><Link to="/Login"><button style={btnStyle}>Login</button></Link></li>
                </ul>
            </nav>
        )
    }
}
