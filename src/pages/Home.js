import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../pages/HeroBanner.js'
import SearchExercise from "../pages/SearchExercise.js"
import Exercise from '../pages/Exercise.js'

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExercise />
            <Exercise />

        </Box>
    )
}

export default Home