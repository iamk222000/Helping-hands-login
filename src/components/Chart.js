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
const PaperStyle={width:"1100"}
const useStyles = makeStyles({
  root: {
    marginLeft:'60px',
    // backgroundColor:"#F39C12",
    
    
  },
  card2:{
      width:250,
      height:200,
      // backgroundImage: `url(${graph})`,
      // opacity:'100%',
      // backgroundPosition:'center',
       backgroundColor:"#F39C12",
      // backgroundSize:'cover',
      // backgroundRepeat:'no-repeat',
      marginTop:'0px'
      
      
      },
      card1:{
        width:250,
        height:200,
        // backgroundImage: `url(${graph})`,
        // opacity:'30%',
        // backgroundPosition:'center',
        backgroundColor:"#F1C40F",
        // backgroundSize:'cover',
        // backgroundRepeat:'no-repeat',
        marginTop:'0px'
        
        
        },
        card3:{
          width:250,
          height:200,
          // backgroundImage: `url(${graph})`,
          // opacity:'30%',
          // backgroundPosition:'center',
          backgroundColor:"#D35400",
          // backgroundSize:'cover',
          // backgroundRepeat:'no-repeat',
          marginTop:'0px'
          
          
          },
      
      grid:{
          align:'center',
          
      },
  }
);

const data = [
  {
    name: "Jan",
    ActiveUsers: 40
  },
  {
    name: "Feb",
    ActiveUsers: 30
    
  },
  {
    name: "Mar",
    ActiveUsers: 32
  },
  {
    name: "Apr",
    ActiveUsers: 40
  },
  {
    name: "May",
    ActiveUsers: 45
  },
  {
    name: "Jun",
    ActiveUsers: 30
  },
  {
    name: "Jul",
    ActiveUsers: 40
  },
  {
    name: "Aug",
    ActiveUsers: 50
  },
  {
    name: "Sep",
    ActiveUsers: 20
  },
  {
    name: "Oct",
    ActiveUsers: 60
  },
  {
    name: "Nov",
    ActiveUsers: 30
  },
  {
    name: "Dec",
    ActiveUsers: 45
  }
];

export default function Chart() {
  const classes = useStyles();
  const [count,setCount]=useState([])
    
    //const future=true
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
    },[count])
  return (
    <Box m={3}>
        <Homebar/>
    <Grid container  spacing={3} className={classes.grid}>
    
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card  className={classes.card1}>
            <CardActionArea>
                  <CardContent>
                  
                    <ListItem alignItems='center'>
                      
                      <ListItemText>
                      <Typography gutterBottom variant="h6" component="h1">
                      Volunteers {count[2]}
                    </Typography>
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
                      <Typography gutterBottom variant="h6" component="h1">
                      Staffs {count[1]}
                    </Typography>
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
                      <Typography gutterBottom variant="h6" component="h1">
                      Events {count[0]}
                    </Typography>
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
      width={1190}
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
      
      <YAxis type="number" domain={[0, 'auto']} tick={{ fill: 'red' }} stroke="red" tickCount={8}>
      
    <Label angle={270} position='left' style={{ textAnchor: 'middle',fontSize: '100%', fill: 'red' }} >
       Number of users
    </Label>
    
</YAxis>

      <Tooltip cursor={false}/>
      <Legend />
      
      <Area
        type="monotone"
        dataKey="ActiveUsers"
        stroke="#8884d8"
        fill="#8884d8"
        activeDot={{ r: 8 }}
      />
      
    </AreaChart>
   
   
    </Paper>
                  
    </Grid>
    </Grid>
    <Footer/>
    </Box>
  );
}
