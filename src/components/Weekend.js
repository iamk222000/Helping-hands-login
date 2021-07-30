import React,{useState,useEffect} from 'react';
import {Grid,  Paper, Button, Typography} from '@material-ui/core';
import {Formik, Form} from 'formik';
import imgl from './Helping_hands.jpeg';
import wkndevnt1 from './img1.jpg';
import wkndevnt2 from './img2.jpg';
import axios from 'axios';
import moment from 'moment';


const Weekend = (props) => {
    const paperStyle={padding :'20px 20px',width:1000, height:'auto', margin:"30px auto"}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0' }
    const logoStyle = {height:120,width:180}
    

    
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
                
               alert("Registered Successfully")
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                // console.log(error.response.data.message);
                alert("Already registered ")

                
            }
            else
                alert("Something went wrong")
            console.log(error)
        });
        
    };
    return(
        <Grid padding='20px 20px'>
            <Paper style={paperStyle} elevation={20}>
                <Grid align='center'>
                    <img src={imgl} style={logoStyle} alt="Logo" elevation={20} />
                </Grid>
                
                <Grid align='center'>
                <Typography>
                    <h2 align='center' style={headStyle}>Weekend Events </h2>
                </Typography>
                </Grid>
                <br></br>
                <br></br>
                <div style={{columnCount:2}}>
                    <div align='center'>
                    <Grid item xs={12} >
                        <Formik align='center'>
                            {(props) => (
                                wevent.map(post=>(
                                    <Form key={post.event_id}>
                                <b>{post.name}</b><br></br>
                                Event id : {post.event_id}<br></br>
                                Venue : {post.venue}<br></br>
                                Date : {moment(post.start_time).format('MMMM Do YYYY')}<br></br>
                                Time : {moment(post.start_time).format('h:mm a')}<br></br>
                                <Button style={btnStyle} color='primary' variant='contained' onClick={e=>handleRegistration(post.event_id,e)} >Register</Button>
                                </Form>
                                ))
                                
                            )}
                        </Formik>

                    </Grid>
                    </div>
                    <br></br>
                    
                </div>
                
                <br></br>
                <br></br>





































                <br></br>
                <br></br>
                <br></br>
                <Grid align='right' item xs={12} >
                    <Button style={btnStyle} color='primary' variant='contained' >Go To Home Page</Button>
                </Grid>
            </Paper>
        </Grid>
            
    )
}

export default Weekend;