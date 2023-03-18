import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardList from '../pages/CardList'
import Edit from '../pages/Edit'
import Home from '../pages/Home'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/games' element={<CardList/>}/>
            <Route path='/game/submit' element={<Edit/>}/>
        </Routes>
        </BrowserRouter>
        
    )
}

export default Router;