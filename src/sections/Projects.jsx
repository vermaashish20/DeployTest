import { Card, CardContent, CardMedia, Grid, ImageList, ImageListItem, ImageListItemBar, Link, Stack, Typography } from '@mui/material'

import React from 'react'



const Projects = () => {
  return (
<Stack id="projects" direction='column' justifyContent='center'
sx={{height:'100vh',backgroundColor:'#001D6E',paddingX:'15px'}}
>
    <Typography sx={{color:'white',borderTop:'solid yellow 10px',paddingTop:'10px',width:'300px'}} variant='h2' fontWeight='bold'>Projects</Typography>
    {/* <ImageList cols={4} rowHeight={250}>
        <ImageListItem sx={{overflow:'hidden'}} >
            <Link href='https://www.google.com'><ImageListItemBar title='Reference Pool'
            subtitle="A website to add video/book/articles references of academic topics"
            /></Link>
            <img src={p_1}></img>
        </ImageListItem>
    </ImageList> */}
  <Grid container spacing={3} columns={5}>

    {items.map((project)=>(
        <Grid item >
        <Card sx={{width:'240px',height:'250px'}}>
           <CardMedia
           sx={{ height: 150 }}
           image={project.img}
           />
               <CardContent sx={{backgroundColor:'darkblue'}}>
                   <Typography >{project.title}</Typography>
                   <Typography fontSize={14}>{project.desc}</Typography>
               </CardContent>  
        </Card>
       </Grid>
    ))}  
    
   </Grid>
</Stack>
     
  )
}

const items=[
    {
    img:'https://images.unsplash.com/photo-1606985265330-4c48384cb47b',
    title:'Reference',
    desc:'to share video/book/article references related to academics'
    },
    {
    img:'https://images.unsplash.com/photo-1606985265330-4c48384cb47b',
    title:'Reference',
    desc:'to share video/book/article references related to academics'
    },
    {
    img:'https://images.unsplash.com/photo-1606985265330-4c48384cb47b',
    title:'Reference',
    desc:'to share video/book/article references related to academics'
    },
    {
    img:'https://images.unsplash.com/photo-1606985265330-4c48384cb47b',
    title:'Reference',
    desc:'to share video/book/article references related to academics'
    },
    {
    img:'https://images.unsplash.com/photo-1606985265330-4c48384cb47b',
    title:'Reference',
    desc:'to share video/book/article references related to academics'
    },
    {
    img:'https://images.unsplash.com/photo-1606985265330-4c48384cb47b',
    title:'Reference',
    desc:'to share video/book/article references related to academics'
    },
   ]

export default Projects