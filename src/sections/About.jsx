import { Container,Stack,Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <Stack direction='row' justifyContent='space-around' spacing={8}
    sx={{paddingY:'20px',height:'50vh',backgroundColor:'#001D6E' }}>
    <Box sx={{width:'50%',borderLeft:'solid yellow 10px'}}>
     <Typography variant='h6' sx={{color:'white',paddingX:'15px'}}>I'm a tech enthusiast with a passion for artificial intelligence, machine learning (AIML), and ethical hacking. Fascinated by the limitless possibilities of AIML, I delve into algorithms, neural networks, and data science. I also explore cybersecurity and ethical hacking, deciphering complex codes and experimenting with cutting-edge technologies. With a curious mind and knack for problem-solving, I'm not just an enthusiast but a future innovator, eager to make a mark in AIML and hacking.</Typography>
     </Box>
      <Typography sx={{width:'50%'}}>some cool anime js property</Typography>
    </Stack>

    <Stack direction='row' spacing={12}
    sx={{backgroundColor:'#16004C' }}
    >

      <Stack direction='column'justifyContent='center' alignItems="center" 
      sx={{paddingX:'10px',width:'10%'}}
      >
      <Typography variant='h1' fontWeight='bold' sx={{transform:'rotate(-90deg)',color:'white'}}>S</Typography>
      <Typography variant='h1' fontWeight='bold' sx={{transform:'rotate(-90deg)',color:'white'}}>L</Typography>
      <Typography variant='h1' fontWeight='bold' sx={{transform:'rotate(-90deg)',color:'yellow'}}>I</Typography>
      <Typography variant='h1' fontWeight='bold' sx={{transform:'rotate(-90deg)',color:'yellow'}}>I</Typography>
      <Typography variant='h1' fontWeight='bold' sx={{transform:'rotate(-90deg)',color:'white'}}>K</Typography>
          <Typography variant='h1' fontWeight='bold' sx={{transform:'rotate(-90deg)',color:'white'}}>S</Typography>
      </Stack>

      <Stack direction='column'
      sx={{width:'30%'}}
      >
        <Typography>Developing</Typography>   
      </Stack>
      <Stack direction='column'
      sx={{width:'30%'}}
      >
        <Typography>AIML</Typography>   
      </Stack>
      <Stack direction='column'
      sx={{width:'30%'}}
      >
        <Typography>Hacking</Typography>   
      </Stack>

    </Stack>

    </>
  )
}

export default About