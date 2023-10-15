import { Stack, Typography,Box } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import HeroImg from '../static/ashi.jpeg'
import heroBg from '../static/hero_bg.png'
const Hero = () => {
  return (
    <Stack id="home" direction="column"
    sx={{backgroundImage:`url(${heroBg})`,backgroundAttachment:'fixed',height:'100vh',width:'100%'}}>
      <NavBar/>

      <Stack direction='column' 
      justifyContent='center' alignItems='start'
      sx={{backgroundColor:'#16004C',paddingX:'30px',paddingTop:'100px',postion:'relative'}}
      >
      <Typography variant='h2' sx={{color:'white'}}>Hello, I'm</Typography>
      <Typography variant='h2' sx={{color:'white'}}fontWeight='bold'> Ashish Verma</Typography>
      <Typography variant='h3' sx={{color:'white'}}>an</Typography>
      <Typography variant='h1' sx={{color:'yellow'}} fontWeight='bold'>AI Enginner</Typography>
      </Stack>
      <Box 
      sx={{height:'530px',width:'390px',backgroundColor:'yellow',
      position:'absolute',left:'60%',top:'20%',
      }}>
        <img src={HeroImg} 
         height='100%' width='auto' alt="hero"/>
      </Box>
      <Typography id="about" variant='h2' sx={{color:'white',paddingTop:'140px',paddingX:'50px'}} fontWeight='bold'>About me</Typography>
    </Stack>

  )
}
// backgroundColor:'#001D6E' :: background
// backgroundImage:`url(${heroBg})`
// backgroundColor:'#16004C' : heroText bg
export default Hero