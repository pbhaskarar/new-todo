import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Reactimg from "../reactbg.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Products = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#008080', height: '100vh' }}>

          <Container maxWidth="lg">
          <Box sx={{ bgcolor: '#ffa500', height: '100vh' }}>

           <center>
           <Box sx={{ width: '80%' }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6} style={{marginTop : '3rem'}}>
            <Item style={{paddingTop : '3rem'}}>
              <img src={Reactimg} alt="img" width="100%" height="100%"/>
            </Item>
            </Grid>
            <Grid xs={6} style={{marginTop : '3rem'}}>
            <Item>
              
            </Item>
            </Grid>
            </Grid>
            </Box>
           </center>

          </Box>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Products