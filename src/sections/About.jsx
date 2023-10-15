import { Container,Stack,Box, Typography, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import AndroidIcon from '@mui/icons-material/Android';
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
      sx={{width:'30%',paddingY:'20px',borderRight:'dashed white 2px'}}
      >
        <Typography fontSize={30} fontWeight='bold' sx={{color:'white',borderBottom:'solid white 2px'}}>Android Developement</Typography>   
       
        <Typography fontSize={23} sx={{color:'white' }}>JetPack Compose:Kotlin</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Java</Typography>

        <Typography fontSize={30} fontWeight='bold' sx={{color:'white',borderBottom:'solid white 2px',paddingTop:'10px'}}>Web Developement</Typography>   
        <Typography fontSize={23} sx={{color:'white' }}>React</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>HTML</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>JavaScript</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Tailwind</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>CSS</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Django</Typography>

        <Typography fontSize={30} fontWeight='bold' sx={{color:'white',borderBottom:'solid white 2px',paddingTop:'10px'}}>Others</Typography>   
        <Typography fontSize={23} sx={{color:'white' }}>SQL</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Firebase</Typography>
      </Stack>

      <Stack direction='column'
      sx={{width:'30%',paddingY:'20px',borderRight:'dashed white 2px'}}
      >
        
        <Typography fontSize={35} fontWeight='bold' sx={{color:'yellow',paddingTop:'10px'}}>AIML</Typography>   
        <Typography fontSize={28}  sx={{color:'white',width:'50%',borderBottom:'solid white 2px',paddingTop:'10px'}}>Data Science</Typography>   
        <Typography fontSize={23} sx={{color:'white' }}>Python</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Numpy</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Pandas</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Matplotlib & Seaborn</Typography>

        <Typography fontSize={28}  sx={{color:'white',borderBottom:'solid white 2px',paddingTop:'10px'}}>AI & ML</Typography>   
        <Typography fontSize={23} sx={{color:'white' }}>Scikit Learn</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>TensorFlow</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>PyTorch</Typography>
      </Stack>


      <Stack direction='column'
      sx={{width:'30%'}}
      >
        <Typography fontSize={35} fontWeight='bold' sx={{color:'white',paddingTop:'10px'}}>Hacking</Typography>   
        <Typography fontSize={23} sx={{color:'white' }}>Web Penetration</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Android hacking</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Networking</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Social Engineering</Typography>
        <Typography fontSize={23} sx={{color:'white' }}>Cloud Computing</Typography>

      </Stack>

    </Stack>

    </>
  )
}

export default About