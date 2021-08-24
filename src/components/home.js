import React from "react";
import { Grid, Typography,Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import logo from './logo.jpg';
import webinar from './webinars.png';
import weekend from './weekend.jpg';
import art from './art&craft.jpg';
import food4thougth from './food4thougth.png';
import Box from '@material-ui/core/Box';
import {useHistory } from 'react-router-dom';
const imgstyle = {
  margin: '10px 100px'
}
// const useStyles = makeStyles({
//   root: {
//     marginLeft: '100px',},
//     card:{width: 400,
//     backgroundColor: "#D6EAF8",
//     '&:hover': {
//       backgroundColor: "#EBF5FB",
//   }},
//   media: {
//     height: 140,
//    },
// });
const useStyles = makeStyles({
  root: {
    width:480,
    alignItems:'center',
    backgroundColor:"#D6EAF8",
      '&:hover':{
          backgroundColor:"#EBF5FB",
      },
  },
  media: {
    height: 140,
    /*minwidth:200,
    alignItems:'center'*/
    
  },
});
// const useStyles = makeStyles({
//   root: {
//     marginLeft:'60px',
//   },
//   card:{
//       width:400,
//       backgroundColor:"#D6EAF8",
//       '&:hover':{
//           backgroundColor:"#EBF5FB",
//       },
//       button:{
//   color:"primary",
//   '&:hover':{
//       backgroundColor:"#2471A3",
//   },
//   marginTop:"8px"},
//       grid:{
//           align:'center',
//           alignItems:'center',
//       },
      
//   },
//   media: {
//         height: 140,
//       },
// });
const Home = () => {
  const classes = useStyles();
  let history = useHistory();
  //const classes = useStyles();
  const Past= ()  =>{
    history.push('/PastEvents');
};
  return (

      <Box  m={5}>
      {/* <Box  align="center">
        <img src={logo} alt="logo" width='200' height='150' />
      </Box> */}
     
      <Box m={3}>
        <Grid container spacing={5} style={{marginLeft:20}}  >
          <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root}>
              <CardActionArea onClick={()=>{history.push("/Weekend");}} >
              {/* <a href="Weekend"> */}
                <img src={weekend} alt="Weekend Events" width='60%' height='150' style={imgstyle} />
                {/* </a> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
                    Weekend Events
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root}>
              <CardActionArea>
               <img src={webinar} alt="Webinar" width='60%' height='150' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}} >
                  Webinar for NGO's
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}  >
            <Card className={classes.root}>
              <CardActionArea>
                <img src={art} alt="Art & Craft" width='60%' height='150' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
                    Art and Craft
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root}>
              <CardActionArea >
                <img src={food4thougth} alt="Food For Thought" width='60%' height='150' style={imgstyle} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'center'}}>
                  Food for Thought
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
       </Box>
      
      <Box m={2}>
      <Grid container direction="column" justifyContent="flex-end" alignItems="flex-end">
      <Grid item xs={12} sm={6} md={3} >
      <Button type='submit' variant='contained' color='primary' onClick={Past}>Go To Past Events</Button>
       </Grid>
       </Grid>
       </Box>
       </Box>

  )
}
export default Home;