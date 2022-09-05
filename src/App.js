import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from '../src/components/Navbar.js'
import Footer from '../src/components/Footer.js'
import Home from '../src/pages/Home.js'
import Exercise from '../src/pages/Exercise.js'


const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<Exercise />} />
            </Routes>
            <Footer />

        </Box>
    )
}

export default App