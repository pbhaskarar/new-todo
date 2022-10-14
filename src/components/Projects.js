import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Projects = () => {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="xl">
            <Box sx={{ bgcolor: '#A9A9A9', height: '100vh' }}> 
            <Container>
              <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid xs={6}>
                    <Item>
                      <center>
                        
                      </center>
                    </Item>
                  </Grid>
                  <Grid xs={6}>
                    <Item>2</Item>
                  </Grid>
                  
                </Grid>
              </Box>
            </Container>
            </Box>  
        </Container>
    </React.Fragment>
  )
}

export default Projects