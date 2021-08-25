import React, { useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import logo from './logo.jpeg';

// import {Component} from 'react';
// import opp from './opp.jpeg';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';

// import Toolbar from '@material-ui/core/Toolbar';

import axios from 'axios';
import { useState } from 'react';
// import {Route, useHistory } from 'react-router-dom';
// import { SettingsCellOutlined } from '@material-ui/icons';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import {Formik, Form} from 'formik';
import moment from 'moment';

import DashboardIcon from '@material-ui/icons/Dashboard';

import Homebar from "./Homebar";
import Footer from './Footer';

const imgstyle = {
    margin: '10px 60px'
}
const useStyles = makeStyles((theme) => ({
    root: {
        minwidth: 200,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    homeButton: {
        marginLeft: theme.spacing(143),
    },
    leaderButton: {
        marginLeft: theme.spacing(160),
    },
    media: {
        height: 140,
        /*minwidth:200,
        alignItems:'center'*/

    }
}));



export default function ButtonAppBar() {

    const dataInfo = JSON.parse(localStorage.getItem("myInfo"))
    const id = dataInfo.id


    const [event, setEvent] = useState([]);


    useEffect(() => {

        {

            axios.get(`http://localhost:8081/account/events/getEventParticipated/${id}`)
                .then((response) => {

                    setEvent(response.data.events)

                })
        };
    }, [])







    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    /*   
       let history = useHistory();
     const home = () => {
      
       history.push('/home');
   
     };
     let history = useHistory();
     const login = () => {
       setAnchorEl(null);
       history.push('/login');
   
     };
   */

    


    return (

    
    <Box  mr={1}> 
    <Homebar/>
      
    

{/* <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <DashboardIcon />
    </IconButton>
	
    <Typography variant="h6" className={classes.title}>
      Dashboard
    </Typography>
    
  </Toolbar>
</AppBar> */}

      
	<br/>
  
	<center> 
        
        <Typography variant='h5' style={{color:"#2E2EFE"}} >Opportunities Registered</Typography>
         </center>
    <Box m={5}>
        
        <Grid container  spacing={6} >
         
             
                {event.map((option) => (
                 
                    <Grid item xs={12} sm={6} md={6}>
                      <Card style={{minwidth:200}}>
                      <CardContent style={{backgroundColor:"#D6EAF8"}}>
                      <center><b>{option.name}</b><br/><br/></center>
                      <b>Type :</b>&nbsp;&nbsp;{option.event_type}<br></br>
                      <b>Venue :</b>&nbsp;&nbsp;{option.venue}<br></br>
                      <b>Description :</b>&nbsp;&nbsp;{option.description}<br></br>
                     <b> Date :</b>&nbsp;&nbsp;{moment(option.start_time).format('MMMM Do YYYY')}<br></br>
                     <b> Time :</b>&nbsp;&nbsp;{moment(option.start_time).format('h:mm a')}<br></br>
                      </CardContent></Card></Grid>
                   
                ))}

              
            
        </Grid>
     
  </Box>
  
  <Footer/>
</Box >

      
    

  )
}