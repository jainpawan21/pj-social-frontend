import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  typography: {
    marginRight: theme.spacing(2),
  }
}));

export default function Home(){

  // const dosomething = (e) => {
  //   e.preventDefault()
  //   axios('https://api.whatsapp.com/send?phone=919992478852',{
  //     'Method': 'Post'
  //   },
  //   {
  //     headers:{
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   })
  //   .then((res) => console.log(res))
  //   .catch(err => console.log(err))

  // }
  const classes = useStyles();  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Grid container> 
            <Grid item>
            <Typography variant="h6" color="inherit" className={classes.typography}>
              Photos
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h6" color="inherit" className={classes.typography}> 
              Photos
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h6" color="inherit" className={classes.typography}>
              <a href="https://wa.me/?text=I'm%20interested%20in%20your%20car%20for%20sale">dosomething</a>
            </Typography>
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
}
