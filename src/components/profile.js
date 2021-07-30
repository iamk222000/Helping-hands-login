import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import imgl from './Helping_hands.jpeg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './help.css';
import Login from './login.js';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";

const Profile=(props)=>{
    const paperStyle={padding :'20px 20px',width:800, height:580, margin:"30px auto"}
    const headStyle={margin:0,fontFamily:'san-serif',color:'blue'}
    const btnstyle = { margin:'10px auto',display:'flex',justifyContent:'center',alignItems:'center', width:'30%',height:'20%'}
    const imgstyle={height:100,width:180}
   
    const [selectedDate,setSelectedDate]=useState(null)
    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    var data=localStorage.getItem("myInfo")
    data=JSON.parse(data.email)
    console.log(data)
    const [post,setPost]=useState({})
    const [mail,setMail]=useState(data)
    useEffect(()=>{
        axios.get('http://localhost:8081/account/register/${mail}')
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)

        })
    },[mail])
    const initialValues = {
        /*fname: '',
        lname: '',
        email: '',*/
        mobile: '',
        dob: '',
        volunteer:'',
        location:'',
        gender:'',
        address:'',
    }
    let history = useHistory();
    const onSubmit = (values, props) => {
        const user = {
            fname: values.fname,
            lname: values.lname,
            email: values.email,
            mobile: values.mobile,
            dob: values.dob,
            volunteer: values.volunteer,
            location: values.location,
            gender: values.gender,
            address: values.address
        }
       
        axios.post("http://localhost:8181/account/login", user)
        .then((response) => {
            var res = response.status;
           
            console.log(response.status)
            if (res === 200) {
                
                history.push('/home');
            }

        })
        .catch((error) => {
            if (error.response.status === 403) {
                console.log(error.response.data.message);
                alert("Invalid email or Password ")

                props.resetForm()
            }
            else
                alert("Something went wrong")
            console.log(error)
        });
        
    }
        
        const validationSchema = Yup.object().shape({
            
            mobile: Yup. string(). matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[ 0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
             'Enter a valid mobile number').required("Required"),
             volunteer: Yup.string().required("Required"),
             dob: Yup.date().required("Required"),
             location: Yup.string().required("Required"),
             address: Yup.string().required("Required"),
           
                })
        
        
    return(
        <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
            <div>
            <img src={imgl} style={imgstyle} alt=""/>
            
            </div>
                <h2 style={headStyle}>Profile</h2>
            </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
                    <Form>
                    <div class="container">
                   <Grid container spacing={2}>
                        <Grid item xs={6}>
                                <Field as={TextField}  label='First Name' name="fname" value={post.fname}  required/>
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField}  label='Last Name' name="lname" value={post.lanme}  required />
                        </Grid>
                    
                        <Grid item xs={6}>
                            <Field as={TextField} label='Email Id' name="email" value={post.mail}
                            onChange={e=>setMail(e.target.value)}  required/>
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} label='Mobile Number' name="mobile" required value={props.values.mobile}
                             onChange={props.handleChange} helperText={<ErrorMessage name="mobile" />}/>
                        </Grid>
                        
                        
                        
                        <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker format="dd/MM/yyy" label="Date of birth"
                        onChange={handleDateChange} value={selectedDate}/>
                        </MuiPickersUtilsProvider>
                        
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} label='About volunteer'  name="volunteer" required value={props.values.volunteer} 
                            onChange={props.handleChange} helperText={<ErrorMessage name="volunteer" />}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} label='Location' name="location" required value={props.values.location} 
                            onChange={props.handleChange} helperText={<ErrorMessage name="location" />}/>
                        </Grid>
                        <Grid item xs={6}>
                            <p>Gender</p>
                            <input type='radio' name='gender' id='Male' value='Male'/>
                            <label for='Male'>Male</label>
                            <input type='radio' name='gender' id='Female' value='Female'/>
                            <label for='Female'>Female</label>
                        </Grid>
                        <Grid item xs={12}>
                            <Field as={TextField} label='Address' name="address" required fullWidth value={props.values.address}
                             onChange={props.handleChange} helperText={<ErrorMessage name="address" />}/>
                        </Grid>
                        
                        
                        
                        </Grid>
                        </div>
                        <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                            style={btnstyle} >{props.isSubmitting ? "Loading" : "Submit"}</Button>
                        
                    </Form>
                )}
            </Formik>
           
        </Paper>
    </Grid>
)

}
    
export default Profile;
