import React, { useEffect } from 'react';
import { Grid, Typography,Button } from '@material-ui/core';
import Homebar from "./Homebar";
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import logo from './logo.jpeg';
import explore from './explore.jpeg';
import {Component} from 'react';
import opp from './opp.jpeg';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import { positions } from '@material-ui/system';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import {useState} from 'react';
import {Route, useHistory } from 'react-router-dom';
import { SettingsCellOutlined } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Formik, Form} from 'formik';
import moment from 'moment';
import { blue } from '@material-ui/core/colors';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import SecurityIcon from '@material-ui/icons/Security';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const imgstyle = {
  margin: '10px 60px'
}
const useStyles = makeStyles((theme) => ({
  root: {
    minwidth:200,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  homeButton: {
    marginLeft: theme.spacing(158),
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

    /* const dataInfo=JSON.parse(localStorage.getItem("myInfo"))
      const id=dataInfo.id*/


      const [event, setEvent] = useState([]);
     
      
 /*    useEffect(()=>{
     
      {
       
      axios.get(`http://localhost:8081/account/events/getEventParticipated/12`)
     .then((response) => {
     
      setEvent(response.data.events)
      
      })
    };
  }, [])*/
 
      
      

   
    
      
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 

  const handleClose = () => {
    setAnchorEl(null);};

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

const history = useHistory();
const [open, setOpen] = React.useState(false);
const handleClickOpen = () => {
  setOpen(true);
};

const handleclose = () => {
  setOpen(false);
};

  return (

    
    <Box  mr={1}> 

      <Homebar/>
	<br/>

	<center> <h2 color="primary">Certificate for events</h2> </center>
    <Box m={5}>
        
        <Grid container  spacing={6} >
         
          
                 
                    <Grid item xs={12} sm={6} md={6}>
                      <Card style={{minwidth:200}}>
                      <CardContent style={{backgroundColor:"#D6EAF8"}}>
                      <center><b>ANIMAL SHELTER</b><br/><br/></center>
                      <b>No:of participants: </b>&nbsp;&nbsp;<b>2</b><br></br>
                      <b>Participant Names: </b>&nbsp;&nbsp;<b>Nikhitha Deore, Roopali Sharma</b><br></br><br/>
                      <Button variant="contained" color="primary" onClick={handleClickOpen}> Send Certificates </Button>


                      <Dialog
       open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<DialogTitle id="alert-dialog-title">{"Send certificates to participants?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking on <b>yes</b> the certificates will be sent to respective mail ids of the participants 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclose} color="primary">
            Yes
          </Button>
          <Button onClick={handleclose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>

      </Dialog>


                      </CardContent></Card></Grid>
                   
               
                      <Grid item xs={12} sm={6} md={6}>
                      <Card style={{minwidth:200}}>
                      <CardContent style={{backgroundColor:"#D6EAF8"}}>
                      
                      <center><b>NGO WEBINARS</b> <br/><br/> </center>
                      
                      <b>No:of participants: </b>&nbsp;&nbsp;<b>3</b><br></br>
                      <b>Participant Names: </b>&nbsp;&nbsp;<b>Sneha Tagore, Diya Dubey, Arav Abhinand</b><br></br><br/>
                      <Button variant="contained" color="primary" onClick={handleClickOpen}> Send Certificates </Button>


                      <Dialog
       open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<DialogTitle id="alert-dialog-title">{"Send certificates to participants?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking on <b>yes</b> the certificates will be sent to respective mail ids of the participants 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclose} color="primary">
            Yes
          </Button>
          <Button onClick={handleclose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>

      </Dialog>


                      </CardContent></Card></Grid>
                      <Grid item xs={12} sm={6} md={6}>
                      <Card style={{minwidth:200}}>
                      <CardContent style={{backgroundColor:"#D6EAF8"}}>
                      <center><b>ART & CRAFT</b><br/><br/></center>
                      <b>No:of participants: </b>&nbsp;&nbsp;<b>2</b><br></br>
                      <b>Participant Names: </b>&nbsp;&nbsp;<b>Avyukth Khanna, Neha Maria</b><br></br><br/>
                      <Button variant="contained" color="primary" onClick={handleClickOpen}> Send Certificates </Button>


                      <Dialog
       open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<DialogTitle id="alert-dialog-title">{"Send certificates to participants?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking on <b>yes</b> the certificates will be sent to respective mail ids of the participants 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclose} color="primary">
            Yes
          </Button>
          <Button onClick={handleclose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>

      </Dialog>


                      </CardContent></Card></Grid>
                   
                      <Grid item xs={12} sm={6} md={6}>
                      <Card style={{minwidth:200}}>
                      <CardContent style={{backgroundColor:"#D6EAF8"}}>
                      <center><b>FOOD FOR THOUGHT</b><br/><br/></center>
                      <b>No:of participants: </b>&nbsp;&nbsp;<b>1</b><br></br>
                      <b>Participant Names: </b>&nbsp;&nbsp;<b>Arohi Sravan</b><br></br><br/>
                      <Button variant="contained" color="primary" onClick={handleClickOpen}> Send Certificates </Button>


                      <Dialog
       open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
<DialogTitle id="alert-dialog-title">{"Send certificates to participants?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By clicking on <b>yes</b> the certificates will be sent to respective mail ids of the participants 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleclose} color="primary">
            Yes
          </Button>
          <Button onClick={handleclose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>

      </Dialog>


                      </CardContent></Card></Grid>
                   
            
        </Grid>
<br/><br/><br/><br/>
        <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
     
    </BottomNavigation>
     
  </Box>
  <Footer/>
</Box>

      
    

  )
}