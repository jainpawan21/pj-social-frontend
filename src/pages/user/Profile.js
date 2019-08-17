import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Edit from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'
// import DeleteUser from './DeleteUser'
import {Redirect, Link} from 'react-router-dom'
// import FollowProfileButton from './../user/FollowProfileButton'
 import ProfileTabs from './ProfileTabs'


const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: 'auto',
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px 0`,
    color: theme.palette.protectedTitle,
    fontSize: '1em'
  },
  bigAvatar: {
    width: 40,
    height: 40,
    margin: `${theme.spacing.unit * 2}px 0`
  }
})

class Profile extends Component {
  constructor({match}) {
    super()
    this.state = {
      user: {following:[], followers:[]},
      following: false,
      posts: []
    }
    this.match = match
  }
 
  render() {
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={require('../../resources/signup-background.jpeg')} className={classes.bigAvatar}/>
            </ListItemAvatar>
            <ListItemText primary=/*{this.state.user.name}*/"Pawan Jain" secondary="{this.state.user.email}"/>
            <ListItemSecondaryAction>
              <Link to={"/user/edit/" + this.state.user._id}>
                <IconButton aria-label="Edit" color="primary">
                  <Edit/>
                </IconButton>
              </Link>
              {/* <DeleteUser userId={this.state.user._id}/> */}
            </ListItemSecondaryAction>
            {/* <FollowProfileButton following={this.state.following} onButtonClick={this.clickFollowButton}/> */}
            
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary={this.state.user.about} secondary={"Joined: " + (
              new Date(this.state.user.created)).toDateString()}/>
          </ListItem>
        </List>
        <ProfileTabs/>
      </Paper>
    )
  }
}
Profile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile)
