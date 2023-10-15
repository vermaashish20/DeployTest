import React from 'react'
import { Stack, Typography } from '@mui/material'
const Footer = () => {
  return (
    <Stack justifyContent='center' alignItems='center'
    sx={{height:'20vh',backgroundColor:'#16004C'}}
    >
        <Typography sx={{color:'white'}} fontSize={20} fontStyle='italic'>Have a nice day</Typography>
        <Typography sx={{color:'white'}} fontSize={20} fontWeight='bold'>Enjoy</Typography>

    </Stack>

  )
}

export default Footer