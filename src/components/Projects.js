import React from 'react';
import {
  Paper,
  Grid,
  Card,
  CardMedia,
  Button,
  ButtonGroup,
} from '@mui/material';
import plant from "../assets/Water_My-Plants_Home.PNG"



export default function Projects() {
  return (
    <div>
      <Grid container spacing = {2}>
        <Grid item xs= {4}>
          <Card >
            <div className='Project-1'>
              <CardMedia
                component="img"
                alt="Home Page of Water My Plants"
                height="140"
                image= {plant}
              />
              <div className='Project-text'>
                <h2>Water My Plants API</h2>
                <h3> Node, Express, PostgreSQL, Heroku.</h3>
                <p>Created REST API routes for a platform used to track plant watering schedules</p>
              </div>
              <ButtonGroup variant="outlined" aria-label="text button group">
                <Button
                href="https://water-my-plants-9-build-week.vercel.app/"
                >Website</Button>
                <Button
                href="https://github.com/Build-Week-Water-My-Plants-8/backend"
                >GitHub</Button>
              </ButtonGroup>
            </div>
          </Card>
        </Grid>
        <Grid item xs= {4}>
          <Card >
            <div className='Project-1'>
              <CardMedia
                component="img"
                alt="Home Page of Water My Plants"
                height="140"
                image= {plant}
              />
              <div className='Project-text'>
                <h2>Water My Plants API</h2>
                <h3> Node, Express, PostgreSQL, Heroku.</h3>
                <p>Created REST API routes for a platform used to track plant watering schedules</p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs= {4}>
          <Card >
            <div className='Project-1'>
              <CardMedia
                component="img"
                alt="Home Page of Water My Plants"
                height="140"
                image= {plant}
              />
              <div className='Project-text'>
                <h2>Water My Plants API</h2>
                <h3> Node, Express, PostgreSQL, Heroku.</h3>
                <p>Created REST API routes for a platform used to track plant watering schedules</p>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
      
    </div>
  )
}
