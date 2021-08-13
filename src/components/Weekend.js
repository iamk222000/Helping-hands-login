import React,{useState,useEffect} from 'react';
import {Grid, Card, Box, Button, CardContent, Typography, makeStyles} from '@material-ui/core';
import imgl from './logo.jpg';
import wkndevnt1 from './img1.jpg';
import axios from 'axios';
import moment from 'moment';
import Homebar from "./Homebar";
import Footer from './Footer';
import Snack from './Snackbar';
const useStyles=makeStyles({
card:{
    backgroundColor:"#D6EAF8",
    '&:hover':{
        backgroundColor:"#EBF5FB",
    }
}
,button:{
    color:"primary",
    '&:hover':{
        backgroundColor:"#2471A3",
    },
    marginTop:"8px"
}
});
const Weekend = (props) => {
    
    const headStyle = {margin:'0', color:'#6200EE'}
    const btnStyle = {margin:'8px 0' }
    const gridStyle={ margin:'3px auto', padding:'5px auto'}
    const [success,setSuccess]=useState(false);
    // const [failure,setFailure]=useState(false);
    const [mesg,setMesg]=useState('');

    
    const [wevent,setWevent]=useState([])
    const event="Weekend event"
    //const future=true
    useEffect(()=>{
        axios.get('http://localhost:8081/account/events/getEventsList/true/Weekend event')
        //('http://localhost:8081/account/event/getEventList/'.concat('/isFutureEvent').concat('future').concat('/eventType').concat('event'))
        //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${future}/eventType${event}`)
        .then(res=>{
            console.log(res)
            console.log(res.data[0].event_id)
            setWevent(res.data)
        })
        .catch(err=>{
            console.log(err)

        })
    },[event])
    const handleRegistration=(id,e)=>{
        const dataInfo=JSON.parse(localStorage.getItem("myInfo"))
        const email=dataInfo.id
        
        
            axios.post(`http://localhost:8081/account/events/registerForEvent/${id}/${email}`)
        .then((response) => {
            var res=response.status
            console.log(response)
            console.log(response.status)
            if (res === 200) {
                setSuccess(true);
                setMesg(response.data.message);
            //    alert("Registered Successfully")
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                // console.log(error.response.data.message);
                // alert("Already registered ")
                // setSuccess(false);
                setSuccess(true);
                setMesg(error.response.data.message);

                
            }
            else
            // setSuccess(false);
            console.log(error)
            setSuccess(true);
            setMesg(error);
        });
        // setSuccess(false);
    };
    const classes=useStyles();
    return(
        <Box>
            <Homebar/>
      <Box mt={1} mb={3} align="center">
        <img src={imgl} alt="logo" width='200' height='150' />
      </Box>
      <Box align="center">
        <Typography variant='h5' style={headStyle}><b> Weekend Events</b></Typography>
      </Box>
      <Box m={5}>
        
            <Grid container  spacing={6} >
             
                    
            {wevent.map((post)=>(
                <Grid item xs={12} sm={6} md={6}>
                    <Card style={{minwidth:200}} className={classes.card}>
                          <CardContent>
                          <Grid container spacing={5}>
                            <Grid item xs={6}  style={gridStyle}>
                            <img src={wkndevnt1}/>
                            </Grid>
                            <Grid item xs={6} style={gridStyle}>
                               <br></br>
                                <b>{post.name}</b><br></br>
                                {/* Event id : {post.event_id}<br></br> */}
                                <b>Venue : </b>  {post.venue}<br></br>
                                <b>Date : </b>  {moment(post.start_time).format('MMMM Do YYYY')}<br></br>
                               <b>Start Time : </b> {moment(post.start_time).format('h:mm a')}<br></br>
                                <b>End Time : </b>  {moment(post.end_time).format('h:mm a')}<br></br>
                                <Button className={classes.button} color='primary' variant='contained' onClick={e=>handleRegistration(post.event_id,e)} >Register</Button>
                            </Grid>
                            </Grid>
                          </CardContent>
                    </Card>
                </Grid>
                      
                    ))}

                  
              
            </Grid>
            {success?<Snack mesg={mesg}/>:''}
      </Box>
      <Footer/>
    </Box>
    )
}

export default Weekend;