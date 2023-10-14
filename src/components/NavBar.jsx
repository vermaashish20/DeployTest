import React from 'react'
import { AppBar,Stack,Box, Link, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  return (  
    <AppBar position='fixed'
    sx={{backgroundColor:'transparent'}} elevation={0}>
    <Stack direction='row'
     justifyContent='center'  alignItems='center'>
      <Toolbar>
        <Stack direction='row' justifyContent='space-between' spacing={6} alignItems='center'>
        <Link href="#about" sx={{color:'white',textDecoration:'none'}}>About</Link>
        <Typography variant='h4' fontWeight='bold' >LOGO</Typography>
        <Link href='#projects' sx={{color:'white',textDecoration:'none'}} >Projects</Link> 
        </Stack>   
      </Toolbar>
    </Stack>
    </AppBar>
  )
}

export default NavBar