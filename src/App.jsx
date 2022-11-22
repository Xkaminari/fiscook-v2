import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

export default class App extends Component {
    render() {
        return <>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </>
    }
}