import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from '../src/components/Login'
import SignIn from '../src/components/SignIn'

export default class App extends Component {
    render() {
        return <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
        </Routes>
        </>
    }
}