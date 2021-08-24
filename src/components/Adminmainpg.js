import React, { useState, useEffect } from "react";
import Homebar from "./Homebar";
import Footer from './Footer';
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Card, CardContent, Box ,CardActionArea} from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import logo from './logo.jpg';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import axios from 'axios';
import Addevents from './Addevents';
// import Pastupload from "./Pastupload";

const useStyles = makeStyles({
  root: {
     marginLeft: '100px',
  },
  card: {
    width: 400,
    backgroundColor: "#D6EAF8",
    '&:hover': {
      backgroundColor: "#EBF5FB",
    },
    button: {
      color: "primary",
      '&:hover': {
        backgroundColor: "#2471A3",
      },
      marginTop: "8px"
    },
    grid: {
      align: 'center',

    },

  }
});
//const dataInfo=JSON.parse(localStorage.getItem("myInfo"))

//const options = ['Oldage Home','Green Earth','Pet show','children Home','Animal Shelter','Day 4 Family'];
//  const [wevent,setWevent]=useState([])
//  const event="Weekend event"

function ConfirmationDialogRaw(props) {
  const [wevent, setWevent] = useState([])
  const event = "Weekend event"
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);
  useEffect(() => {
    axios.get('http://localhost:8081/account/events/getEventsList/true/Weekend event')

      .then(res => {
        console.log(res)
        console.log(res.data[0].event_id)
        setWevent(res.data)

      })
      .catch(err => {
        console.log(err)

      })
  }, [event])
  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };


  const handleCancel = () => {
    onClose();
  };
  let history = useHistory();

  const handleOk = () => {
    const evnt = value;
    localStorage.setItem('eventName', JSON.stringify(evnt));
    const dataInfo = JSON.parse(localStorage.getItem("eventName"))
    console.log(dataInfo)
    onClose();
    history.push('/Registereduser')
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Events</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="Events"
          name="Events"
          value={value}
          onChange={handleChange}

        >
          {wevent.map((option) => (
            <FormControlLabel value={option.name} key={option.name} control={<Radio />} label={option.name} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};


export default function Adminpg() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [past, setPast] = React.useState(false);

  const handleDialogue = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const pastDialogue = () => {
    setPast(true);

  };

  let history = useHistory();

  return (

    <Box m={3}>
      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}

      />
      <Homebar />
      
      <br></br>
      <br></br>
      <Box m={3}>
        
        <Grid container spacing={8} className={classes.grid}>
          <Grid item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={classes.card}>
            <CardActionArea onClick={()=>{history.push('/Addevents');}}>
              <CardContent>

                <ListItem alignItems='center'>
                  <ListItemIcon ><AddIcon /></ListItemIcon>
                  <ListItemText>
                    <Typography gutterBottom variant="h6" component="h1">
                      Add Events
                    </Typography>
                  </ListItemText>
                </ListItem>

              </CardContent>
              </CardActionArea>
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={classes.card}>
            <CardActionArea onClick={()=>{history.push('/Editevents');}}>
              <CardContent>

                <ListItem alignItems='center'>
                  <ListItemIcon ><EditIcon /></ListItemIcon>
                  <ListItemText>
                    <Typography gutterBottom variant="h6" component="h1">
                      Edit Events
                    </Typography>
                  </ListItemText>
                </ListItem>

              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={classes.card} >
            <CardActionArea onClick={()=>{history.push('/Pastupload');}}>
              <CardContent>

                <ListItem alignItems='center'>
                  <ListItemIcon >{<PublishSharpIcon />} </ListItemIcon>
                  <ListItemText>
                    <Typography gutterBottom variant='h6' component="h1">
                      Upload Past Event Photos
                    </Typography>
                  </ListItemText>
                </ListItem>

              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.root}>
            <Card className={classes.card} >
            <CardActionArea onClick={handleDialogue}>
              <CardContent>

                <ListItem alignItems='center'>
                  <ListItemIcon >{< PeopleOutlineIcon />} </ListItemIcon>
                  <ListItemText>
                    <Typography gutterBottom variant='h6' component="h1">
                     View Registered Users
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
        {/* <Grid align="right">
                    <Button className={classes.button} color='primary' variant='contained' onClick={Home}>Go To Home Page</Button>
                </Grid> */}

      </Box>
     <Footer/>
    </Box>

  )

}