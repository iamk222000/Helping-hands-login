// import "./chart.css";
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Homebar from "./Homebar";
import Footer from './Footer';

import {Grid, Box, Card,Paper, CardContent,CardActionArea, Button, Typography,  makeStyles, ListItem, ListItemText} from '@material-ui/core';
import {
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  AreaChart,Area
} from "recharts";
import graph from './circlegraph.png';
const PaperStyle={ width:1040 }
const useStyles = makeStyles({
  root: {
    marginLeft:'80px',
    // backgroundColor:"#F39C12",
    
    
  },
  card2:{
      width:200,
      height:150,
      // backgroundImage: `url(${graph})`,
      // opacity:'100%',
      // backgroundPosition:'center',
       backgroundColor:"#F39C12",
      // backgroundSize:'cover',
      // backgroundRepeat:'no-repeat',
      marginTop:'0px',
      marginLeft:'10px'
      
      
      },
      card1:{
        width:200,
        height:150,
        // backgroundImage: `url(${graph})`,
        // opacity:'30%',
        // backgroundPosition:'center',
        backgroundColor:"#F1C40F",
        // backgroundSize:'cover',
        // backgroundRepeat:'no-repeat',
        marginTop:'0px',
        marginLeft:'10px'
        
        
        },
        card3:{
          width:200,
          height:150,
          // backgroundImage: `url(${graph})`,
          // opacity:'30%',
          // backgroundPosition:'center',
          backgroundColor:"#D35400",
          // backgroundSize:'cover',
          // backgroundRepeat:'no-repeat',
          marginTop:'0px',
          marginLeft:'10px'
          
          
          },
      
      grid:{
          align:'center',
          
      },
  }
);

const data = [
  {
    name: "Jan",
    Volunteers: 20
  },
  {
    name: "Feb",
    Volunteers: 15
    
  },
  {
    name: "Mar",
    Volunteers: 16
  },
  {
    name: "Apr",
    Volunteers: 10
  },
  {
    name: "May",
    Volunteers: 20
  },
  {
    name: "Jun",
    Volunteers: 15
  },
  {
    name: "Jul",
    Volunteers: 17
  },
  {
    name: "Aug",
    Volunteers: 12
  },
  {
    name: "Sep",
    Volunteers: 20
  },
  {
    name: "Oct",
    Volunteers: 23
  },
  {
    name: "Nov",
    Volunteers: 10
  },
  {
    name: "Dec",
    Volunteers: 15
  }
];

export default function Chart() {
  const classes = useStyles();
  const [count,setCount]=useState([])
    
    let future=true
    useEffect(()=>{
        axios.get('http://localhost:8081/account/leader/userAnalyticsCounts')
        .then(res=>{
            console.log(res)
            console.log(res.data)
            // console.log(response.data.Users )
            setCount(res.data)
        })
        .catch(err=>{
            console.log(err)

        })
    },[future]);
  return (
    <Box m={3}>
        <Homebar/>
        <center>
    <Grid container  spacing={2} className={classes.grid}>
    
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card1}>
            <CardActionArea>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      
                      <ListItemText>
                      <center>
                      <Typography gutterBottom variant="h6" component="h1">
                      Volunteers
                    </Typography>
                    <Typography gutterBottom variant="h2" component="h3">
                    {count[1]}
                    </Typography>
                    </center>
                      </ListItemText>
                    </ListItem>
                    
                  </CardContent>
                  </CardActionArea>
            </Card>
            
        </Grid>
   
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card2}>
            <CardActionArea>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      
                      <ListItemText>
                      <center>
                      <Typography gutterBottom variant="h6" component="h1">
                      Hours
                    </Typography>
                    <Typography gutterBottom variant="h2" component="h3">
                    {count[0]}
                    </Typography>
                    </center>
                      </ListItemText>
                    </ListItem>
                    
                  </CardContent>
                  </CardActionArea>
            </Card>
            
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card3}>
            <CardActionArea>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      
                      <ListItemText>
                      <center>
                      <Typography gutterBottom variant="h6" component="h1">
                      Events
                    </Typography>
                    <Typography gutterBottom variant="h2" component="h3">
                    {count[2]}
                    </Typography>
                    </center>
                      </ListItemText>
                    </ListItem>
                    
                  </CardContent>
                  </CardActionArea>
            </Card>
            
        </Grid>

    <Grid item xs={12} sm={12} md={12}>
    <Paper style={PaperStyle} >
    <center>
    <Typography variant="h5">User Analytics</Typography>
    </center>
    <AreaChart
      width={1000}
      height={300}
      data={data}
      
      margin={{
        top: 5,
        right: 10,
        left: 50,
        bottom: 5
        
      }}
    >
    
      <CartesianGrid horizontal="" vertical="" />
      <XAxis dataKey="name" tick={{ fill: 'red' }} stroke="red"/>
      
      <YAxis type="number" domain={[0, 'auto']} tick={{ fill: 'red' }} stroke="red" tickCount={5}>
      
    <Label angle={270} position='left' style={{ textAnchor: 'middle',fontSize: '100%', fill: 'red' }} >
       Number of Volunteers
    </Label>
    
</YAxis>

      <Tooltip cursor={false}/>
      <Legend />
      
      <Area
        type="monotone"
        dataKey="Volunteers"
        stroke="#8884d8"
        fill="#8884d8"
        activeDot={{ r: 8 }}
      />
      
    </AreaChart>
   
   
    </Paper>
                  
    </Grid>
    </Grid>
    <Footer/>
    </center>
    </Box>
  );
}
