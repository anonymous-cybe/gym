import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import { borderBottom, Stack } from '@mui/system'

const Navbar = () => {
    return (
        <div>
            <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px='20px'>
                <Link to="/">
                    <img src={Logo} alt="logo" style={{ width: "48px", height: "48px", margin: "o 2px" }} />
                </Link>
                <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
                    <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: "3px solid #FF2625" }}>Home</Link>
                    <a href='#exercise' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercise</a>
                </Stack>
            </Stack>
        </div>
    )
}

export default Navbar