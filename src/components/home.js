import React from "react";
import { Grid, Typography,Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import logo from './logo.jpg';
import webinar from './webinars.png';
import weekend from './weekend.jpg';
import art from './art&craft.jpg';
import food4thougth from './food4thougth.png';
import Box from '@material-ui/core/Box';
import {useHistory } from 'react-router-dom';
const imgstyle = {
  margin: '10px 60px'
}
const useStyles = makeStyles({
  root: {
    minwidth:200,
    backgroundColor: "#D6EAF8",
    '&:hover': {
      backgroundColor: "#EBF5FB",
  }},
  media: {
    height: 140,
   },
});
const Home = () => {
  const classes = useStyles();
  let history = useHistory();
  //const classes = useStyles();
  const Past= ()  =>{
    history.push('/PastEvents');
};
  return (

      <Box  mt={3}>
      <Box mt={3} align="center">
        <img src={logo} alt="logo" width='200' height='150' />
      </Box>

      <Box m={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea onClick={()=>{history.push("/Weekend");}} >
              {/* <a href="Weekend"> */}
                <img src={weekend} alt="Weekend Events" width='60%' height='120' style={imgstyle} />
                {/* </a> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weekend Events
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
               <img src={webinar} alt="Webinar" width='60%' height='120' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2"  >
                  Webinar For NGO's
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <img src={art} alt="Art & Craft" width='60%' height='120' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Art And Craft
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3 }>
            <Card className={classes.root}>
              <CardActionArea >
                <img src={food4thougth} alt="Food For Thougth" width='60%' height='120' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >
                  Food For Thought
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
       </Box>
      
      <Box m={3}>
      <Grid container direction="column" justifyContent="flex-end" alignItems="flex-end">
      <Grid item xs={12} sm={6} md={3}>
      <Button type='submit' variant='contained' color='primary' onClick={Past}>Go To Past Events</Button>
       </Grid>
       </Grid>
       </Box>
       </Box>

  )
}
export default Home;