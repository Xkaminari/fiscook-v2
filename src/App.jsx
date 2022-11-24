import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from '../src/components/Login'
import SignIn from '../src/components/SignIn'
import { auth, db } from "./config/config";

export default class App extends Component {
    constructor(props) {
            super(props)
            this.state = {
            user: null,
        }
    }
    
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                    user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null,
                })
            }
        })
    }
    
    render() {
        return <>
        <Routes>
            {/* use this props to get the user name in your component: user={this.state.user} */}
            <Route path='/' element={<Home user={this.state.user}/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
        </Routes>
        </>
    }
}