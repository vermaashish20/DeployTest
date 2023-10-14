import { Stack, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
const Hero = () => {
  return (
    <Stack direction="column"
    sx={{backgroundColor:'#001D6E',height:'100vh',width:'100%'}}>
      <NavBar/>
      <Stack direction='column' 
      justifyContent='center' alignItems='start'
      sx={{backgroundColor:'#16004C',paddingX:'30px'}}
      >
      <Typography variant='h2' sx={{color:'white'}}>Hello, I'm</Typography>
      <Typography variant='h2' sx={{color:'white'}}fontWeight='bold'> Ashish Verma</Typography>
      <Typography variant='h3' sx={{color:'white'}}>an</Typography>
      <Typography variant='h1' sx={{color:'yellow'}} fontWeight='bold'>AI Enginner</Typography>
      </Stack>
      
    </Stack>

  )
}

export default Hero