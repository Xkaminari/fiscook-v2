import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/config';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        let User = this.props.user;
        auth.onAuthStateChanged(user => {
            if (!User) {
                this.setState({
                    lougoutRedirection: "/Login",
                })
            }
        })
    }
    
    logout() {
        auth.signOut().then(() => {
            this.setState({
                lougoutRedirection: "/Boutique/LoginPage",
            })
        })
    }
    
    render() {
        const navStyle = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }
        const h2Style = {
            fontSize: "1.5em",
            fontFamily: "sans-serif",
            color: "#0f0f0f",
            margin: "10px 10px 0 20px",
            textDecoration: "none",
        }
        const ulStyle = {
            listStyleType: "none",
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px 10px 0 0",
            alignItems: "center",
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
            cursor: "pointer",
        }
        const AccountNameStyle = {
            textDecoration: "none",
            fontSize: "1.6em",
            margin: "0 20px 0 0",
            color: "#0f0f0f",
            fontFamily: "sans-serif",
        }
        return ( 
            <nav style={navStyle}>
                <Link to="/" style={h2Style}><h2>Fiscook</h2></Link>
                {!this.props.user && <div>
                <ul style={ulStyle}>
                    <li style={liStyle}><Link to="/SignIn"><button style={btnStyle}>Singn In</button></Link></li>
                    <li style={liStyle}><Link to="/Login"><button style={btnStyle}>Login</button></Link></li>
                </ul>
                </div>}
                {this.props.user && <div style={ulStyle}>
                    <span><Link to="/" style={AccountNameStyle}>{this.props.user}</Link></span>
                    <span><button style={btnStyle} onClick={this.logout.bind(this)}>Logout</button></span>
                </div>}
            </nav>
        )
    }
}
