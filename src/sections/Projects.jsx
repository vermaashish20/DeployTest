import { Stack, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
<Stack direction='column'
sx={{height:'100vh',backgroundColor:'#001D6E'}}
>
    <Typography sx={{color:'white',borderTop:'solid yellow 10px',paddingTop:'10px',width:'350px'}} variant='h1' fontWeight='bold'>Projects</Typography>
    

</Stack>
     
  )
}

export default Projects