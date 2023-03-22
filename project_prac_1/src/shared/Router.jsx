import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardList from '../pages/CardList'
import Edit from '../pages/Edit'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/games' element={<CardList/>}/>
            <Route path='/game/submit' element={<Edit/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}

export default Router;