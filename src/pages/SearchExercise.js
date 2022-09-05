import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import { fetchData, exerciseOption } from '../utils/fetchData'
const SearchExercise = () => {
    const [search, setSearch] = useState('')
    const [exercise, setExercise] = useState('')
    const [bodyParts, setbodyParts] = useState([])

    useEffect(
        () => {
            const fetchExerciseData = async () => {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);
                setbodyParts(['all', ...bodyPartsData])
            }
            fetchExerciseData();
        }
        , [])



    const submitHandler = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption)
            const searchedExercise = exerciseData.filter(
                (exercise) => exercise.name.toLowerCae().includes(search)
                    || exercise.bodyPart.toLowerCae().includes(search)
                    || exercise.target.toLowerCae().includes(search)
                    || exercise.equipment.toLowerCae().includes(search)
            )
            setSearch('')
            setExercise(searchedExercise)
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="cennter" p="20px">
            <Typography sx={{ fontSize: { lg: '40px', xs: ' 30px' } }} fontWeight="700" textAlign='center' mb='50px'>
                Awesome Exercises you <br />   should know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField height='76px' value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} placeholder='Search Exercise' sx={{ input: { border: 'none', fontWeight: '700', borderRadius: '4px' }, width: { lg: '800px', xs: '310px' }, borderRadius: '40px' }} />
                <Button onClick={submitHandler} className='search-btn' sx={{ backgroundColor: '#ff2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0' }}>Search</Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} />

            </Box>

        </Stack >
    )
}

export default SearchExercise