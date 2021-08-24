import React from 'react';
import Homebar from "./Homebar";
import logo from './logo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import EmojiPeopleRoundedIcon from '@material-ui/icons/EmojiPeopleRounded';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {useHistory } from 'react-router-dom';
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Card, CardContent,CardActionArea,Box } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

import Footer from './Footer';
import Addevents from './Addevents';
import Certificates from './Certificates';
const useStyles = makeStyles({
    root: {
      marginLeft:'60px',
    },
    card:{
        width:350,
        backgroundColor:"#D6EAF8",
        '&:hover':{
            backgroundColor:"#EBF5FB",
        },
        button:{
    color:"primary",
    '&:hover':{
        backgroundColor:"#2471A3",
    },
    marginTop:"8px"},
        grid:{
            align:'center',
            
        },
        
    }
  });
const Leader = () => {
    const paperStyle={padding :'20px 20px',width:800, height:580, margin:"30px auto"}
    const classes = useStyles();
    const gridStyle={ margin:'3px auto', padding:'5px auto'}
    const Home= ()  =>{
        history.push('/apphome');
    };
    let history=useHistory()
return(
    <Box m={3}>
    <Homebar />
    <Box mt={1} mb={3} align="center">
      <img src={logo} alt="logo" width='200' height='150' />
    </Box>
    <br></br>
    <br></br>
    <Box m={3}>
        
    <Grid container  spacing={8} className={classes.grid}>
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card}>
            <CardActionArea onClick={()=>{history.push('/LeaderRR');}}>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      <ListItemIcon ><EmojiPeopleRoundedIcon /></ListItemIcon>
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Nominate TM for R&R
                    </Typography>
                      </ListItemText>
                    </ListItem>
                    
                  </CardContent>
                  </CardActionArea>
            </Card>
            
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card}>
            <CardActionArea onClick={()=>{history.push('/Certificates');}}>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      <ListItemIcon ><CardGiftcardIcon /></ListItemIcon>
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Send Certificates
                    </Typography>
                      </ListItemText>
                    </ListItem>
                    
                  </CardContent>
                  </CardActionArea>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card} >
            <CardActionArea onClick={()=>{history.push('/Chart');}}>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      <ListItemIcon ><HourglassEmptyIcon /></ListItemIcon>
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Hours Spent
                    </Typography>
                      </ListItemText>
                    </ListItem>
                    
                  </CardContent>
                  </CardActionArea>
            </Card>
        </Grid>
              

          
      
    </Grid>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid align="right">
                    <Button className={classes.button} color='primary' variant='contained' onClick={Home}>Go To Home Page</Button>
                </Grid>
  
</Box>
    <Footer/>
    </Box>
);




    }
    export default Leader;