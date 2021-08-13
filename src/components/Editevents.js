// import React, {useState, useEffect} from 'react';
// import {Grid, Paper, Box, Button, Card, CardContent, Select, Tooltip, Typography, TextField, AppBar, IconButton, Toolbar , makeStyles} from '@material-ui/core';
// import {ArrowBack, Home, Menu } from '@material-ui/icons';
// import {Formik, Form, FormControl, Field, ErrorMesage} from 'formik';
// import logo from './HH-logo.jpg';
// //import wkndevnt1 from './img1.jpg';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, } from '@material-ui/pickers';

// //import Dropdown from 'react-dropdown';

// import es from 'date-fns/locale/es';
// import moment from 'moment';
// import axios from 'axios';


// const EditEvents = (props) => {
//     const paperStyle = {padding:'10px 25px', height:'auto', width:750, margin:'25px auto', border:' black'}
//     const gridStyle = {margin:'3px auto', padding:'5px auto'}
//     const headStyle = {margin:'0', fontFamily:'serif', color:'blue'}
//     const btnStyle = {margin:'8px 0'}
//     const logoStyle = {height:98, width:128}
    
//     /*const handleChange = () => {
//         const onSubmit 
//     }*/

//     const [wevent, setWevent] = useState([])
//     const event = "Weekend event"
//     //const future=true
//     useEffect(() => {
//         axios.get('http://localhost:8081/account/events/getEventsList/true/Weekend event')
//         //('http://localhost:8081/account/events/getEvents/'.concat('/isFutureEvent').concat('event'))
//         //(`http://localhost:8081/account/events/getEventsList/isFutureEvent${future}/eventTypes${event}`)
//         .then(response => {
//             console.log(response)
//             console.log(response.data[0].event_id)
//             setWevent(response.data)
//         })
//         .catch(error => {
//             if(error.response.status===400 || error.response.status===401) {
//                 console.log(error.response.data.message)
//             }
//             else {
//                 console.log("Oop! Something went wrong")
//             }
//         })
//     },[event])

//     const [selectedDate, setSelectedDate] = React.useState(new Date());

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//     };

//     const options = [
//         { value: 'weekendevents', label: 'Weekend Events' },
//         { value: 'webinarforNGOs', label: 'Webinar for NGOs' },
//         { value: 'foodforthought', label: 'Food for Thought' },
//         { value: 'artandcraft', label: 'Art & Craft' },
//       ];

//     const useStyles = makeStyles((theme) => ({
//         root: {
//             flexGrow: 1,
            
//         },
//         homeButton: {
//             marginRight: theme.spacing(5),
//         },
//         backButton: {
//             marginLeft: theme.spacing(1),
//         },
//         button:{
//             color:"primary",
//             '&:hover':{
//                 backgroundColor:"#2471A3",
//             },
//             marginTop:"8px"
//         }
//     }));

//     const classes = useStyles();

//     return (
//         <Box >

//         <AppBar position="static">
//             <Toolbar>
//                 <IconButton edge="start" className={classes.backButton} color="inherit" aria-label="Back">
//                     <ArrowBack />
//                 </IconButton>
//                 <div align="right">
//                 <IconButton edge="end" className={classes.homeButton} color="inherit" aria-label="Home">
//                     <Home />
//                 </IconButton>
//                 </div>
//             </Toolbar>
//         </AppBar>

//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <Grid style={gridStyle} >
//             <Paper style={paperStyle} elevation={2}>
//                 <Grid align='center'>
//                     <img src={logo} style={logoStyle} alt="Logo" />
//                 </Grid>
//                 <Grid item xs={12} align='center'>
//                     <Typography>
//                         <h2 style={headStyle}>Edit Events</h2>
//                     </Typography>
//                     <br /><br />
//                 </Grid>

//                 <Grid>
//                     <FormControl variant="outlined" >
//                         <InputLabel>Event Type</InputLabel>
//                         <Select label="Event Type">
//                         <MenuItem aria-label="None" value="" />
//                         <MenuItem value="weekendevents">Weekend Events</MenuItem>
//                         <MenuItem value="webinarforngo">Webinars for NGOs</MenuItem>
//                         <MenuItem value="artsandcraft">Arts &mp; Craft</MenuItem>
//                         <MenuItem value="foodforthought">Food for Thought</MenuItem>
//                     </Select>
//                     <br />
//                     </FormControl>
//                 </Grid>

//                 <Grid container spacing={6}>
//                     {wevent.map((post)=>(
//                         <Grid item xs={12} >
//                             <Card style={{minwidth:200}} className={classes.card}>
//                                 <CardContent>
//                                     <Grid container spacing={5}>                                        
//                                         <Grid style={gridStyle}>
//                                             <Formik>
//                                                 {(props) => (
//                                                     <Form >
//                                                         <p align="left">
//                                                             <br />
//                                                             <Field as={TextField} fullWidth label="Event Name" name="eventname" value={post.name} required />
//                                                             <br /><br />
//                                                             <Field as={TextField} fullWidth label="Venue" name="venue" value={post.venue} required />
//                                                             <br />
//                                                             <KeyboardDatePicker
//                                                                 disableToolbar
//                                                                 disablePast
//                                                                 variant="inline"
//                                                                 format="MM/dd/yyyy"
//                                                                 margin="normal"
//                                                                 id="date-picker-inline"
//                                                                 label="Date"
//                                                                 value={selectedDate}
//                                                                 required
//                                                                 onChange={handleDateChange}
//                                                                 KeyboardButtonProps = {{
//                                                                     'aria-label': 'change date',
//                                                                 }}
//                                                             />
//                                                             <br /><br />
//                                                             <Field as={TextField} fullWidth label="Start-Time" name="starttime" value={moment(post.start_time).format('h:mm a')} required />
//                                                             <br /><br />
//                                                             <Field as={TextField} fullWidth label="End-Time" name="endtime" value={moment(post.end_time).format('h:mm a')} required />
//                                                             <br /><br />
//                                                             <Field as={TextField} fullWidth label="Description" name="description" value={post.description} required />
//                                                             <br />
//                                                         </p>
//                                                     </Form>
//                                                 )}
//                                             </Formik>
                                            
//                                         </Grid>

//                                         <Grid style={gridStyle}>
//                                             <p align="left">
//                                                 <br />
//                                                 <b>Event ID: {post.event_id}</b>
//                                                 <br />
//                                                 <b>Name: {post.name}</b>
//                                                 <br />
//                                             </p>
//                                         </Grid>
//                                     </Grid>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>

//             </Paper>
//         </Grid>
//         </MuiPickersUtilsProvider>

//         </Box>
//     )
// }

// export default EditEvents;