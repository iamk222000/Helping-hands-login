import React,{ useState, useEffect, useReducer } from 'react';
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
function profileRegister(state, action) {
    const dataProfile=JSON.parse(localStorage.getItem("myProfile"))
    const info=JSON.parse(localStorage.getItem("myInfo"))
    switch (action.type) {
      case 'success': {
        return {
        fname: info.firstname,
        lname: info.lastname,
        email: info.email,
        mobile_number: dataProfile.mobile_number,
        dob: dataProfile.dob,
        about:dataProfile.about,
        location:dataProfile.location,
        gender:dataProfile.gender,
        address:dataProfile.address,
          
          
        };
      }
      case 'error': {
        return {
          ...state,
          
        };
      }
      
      default:
        return state;
    }
  }

const Profile=(props)=>{
    const paperStyle={padding :'20px 20px',width:800, height:580, margin:"30px auto"}
    const headStyle={margin:0,fontFamily:'san-serif',color:'blue'}
    const btnstyle = { margin:'10px auto',display:'flex',justifyContent:'center',alignItems:'center', width:'30%',height:'20%'}
    const imgstyle={height:100,width:180}
    const dataInfo=JSON.parse(localStorage.getItem("myInfo"))
    const initialValues = {
        fname: dataInfo.firstname,
        lname: dataInfo.lastname,
        email: dataInfo.email,
        mobile_number: '',
        dob: '',
        volunteer:'',
        location:'',
        gender:'',
        address:'',
    }
   
    const [selectedDate,setSelectedDate]=useState(null)
    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    const data=JSON.parse(localStorage.getItem("myInfo"))
    const id=data.id
    
    const [state, dispatch] = useReducer(profileRegister, initialValues);
    const { fname, lname,email,mobile_number,dob,about,location,gender,address } = state;
    useEffect(()=>{
        
        axios.get(`http://localhost:8081/account/getProfile/${id}`)
        .then(res=>{
            console.log(res)
            const pro=res.data
           localStorage.setItem('myProfile',JSON.stringify(pro))
            dispatch({ type: 'success' })
        })
        .catch(err=>{
            console.log(err)
            dispatch({ type: 'error' })

        })
    },[id])
    
    let history = useHistory();
    const onSubmit = (values,props) => {
        const user = {
            /*fname: values.fname,
            lname: values.lname,*/
            email: values.email,
            mobile_number: values.mobile_number,
            dob: values.dob,
            about: values.about,
            gender: values.gender,
            location: values.location,
            address: values.address
        }
        console.log(user)
        axios.post("http://localhost:8081/account/saveProfile", user)
        .then((response) => {
            var res = response.status;
           
            console.log(response.status)
            if (res === 200) {
                alert("Profile Updated")
                history.push('/home');
            }

        })
        .catch((error) => {
            if (error.response.status === 400) {
                console.log(error.response.data.message);
                alert("Error ")

                
            }
            else
                alert("Something went wrong")
            console.log(error)
        });
        
    }
        
        const validationSchema = Yup.object().shape({
            
            mobile_number: Yup. string(). matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[ 0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
             'Enter a valid mobile number').required("Required"),
             about: Yup.string().required("Required"),
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
                                <Field as={TextField}  label='First Name' name="fname"   required/>
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField}  label='Last Name' name="lname"   required />
                        </Grid>
                    
                        <Grid item xs={6}>
                            <Field as={TextField} label='Email Id' name="email" 
                              required/>
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} label='Mobile Number' name="mobile_number" required value={props.values.mobile_number}
                             onChange={props.handleChange} helperText={<ErrorMessage name="mobile_number" />}/>
                        </Grid>
                        
                        
                        
                        <Grid item xs={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker format="dd/MM/yyy" label="Date of birth"
                        onChange={handleDateChange} value={selectedDate}/>
                        </MuiPickersUtilsProvider>
                        
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} label='About volunteer'  name="about" required value={props.values.about} 
                            onChange={props.handleChange} helperText={<ErrorMessage name="about" />}/>
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
                            style={btnstyle}>{props.isSubmitting ? "Loading" : "Submit"}</Button>
                        
                    </Form>
                )}
            </Formik>
           
        </Paper>
    </Grid>
)

}
    
export default Profile;
