import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minwidth:200,
      backgroundColor:"white",
    },
}));

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(
        <Box mt={10}>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon color='primary'/>} />
        <BottomNavigationAction label="YouTube" icon={<YouTubeIcon color='primary'/>} />
      </BottomNavigation></Box>
  
    )

    }