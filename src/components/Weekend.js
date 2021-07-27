import React,{useState,useEffect} from 'react';
import {Grid,  Paper, Button, IconButton, Dialog, Typography} from '@material-ui/core';
import {Formik, Form, Field,} from 'formik';
import imgl from './Helping_hands.jpeg';
import wkndevnt1 from './img1.jpg';
import wkndevnt2 from './img2.jpg';
import axios from 'axios';


const Weekend = (props) => {
    const paperStyle={padding :'20px 20px',width:1000, height:'auto', margin:"30px auto"}
    const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
    const btnStyle = {margin:'8px 0' }
    const logoStyle = {height:100,width:180}
    const imgStyle = {height:'200px', width:'300px', margin:'auto 30px', padding:'10px auto'}

    
    const [wevent,setWevent]=useState({})
    const event="Weekend event"
    const future=true
    useEffect(()=>{
        axios.get(`http://localhost:8081/account/events/getEventsList/isFutureEvent${future}/eventType${event}`)
        //('http://localhost:8081/account/event/getEventList/'.concat('/isFutureEvent').concat('future').concat('/eventType').concat('event'))
        //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${future}/eventType${event}`)
        .then(res=>{
            console.log(res)
            setWevent(res.data)
        })
        .catch(err=>{
            console.log(err)

        })
    },)
    return(
        <Grid padding='20px 20px'>
            <Paper style={paperStyle} elevation={20}>
                <Grid align='center'>
                    <img src={imgl} style={logoStyle} alt="Logo" elevation={20} />
                </Grid>

                <Grid item xs={6} sm={3}>
                <Typography>
                    <h2 align='center' style={headStyle}>Weekend Events </h2>
                </Typography>
                </Grid>
                <br></br>
                <br></br>
                <div style={{columnCount:2}}>
                    <Grid item xs={6} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    <img src={wkndevnt1} style={imgStyle}  alt="Children Home"  elevation={20} />

                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    <Field as={Date} />
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                <Button style={btnStyle} color='primary' variant='contained' >Register</Button>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </div>
                
                <br></br>
                <br></br>
                
                
                <div style={{columnCount:2}}>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                    <img src={wkndevnt2} style={imgStyle}  alt="Animal Shelter"  elevation={20} />
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                <Field as={Date} />
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                    <br></br>
                    <Grid item xs={12} sm={6}>
                        <Formik>
                            {(props) => (
                                <Form>
                                <Button style={btnStyle} color='primary' variant='contained' >Register</Button>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </div>
                
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