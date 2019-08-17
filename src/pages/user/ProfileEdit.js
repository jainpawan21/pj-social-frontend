import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'


const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: 1,
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.protectedTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  }
})



class ProfileEdit extends Component {
  constructor({match}) {
    super()
    this.state = {
      name: '',
      about: '',
      photo: '',
      email: '',
      password: '',
      redirectToProfile: false,
      error: ''
    }
    this.match = match
  }
  render(){
    const {classes} = this.props
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" component="h2" className={classes.title}>
          Edit Profile
        </Typography>
        <Avatar src={require('../../resources/signup-background.jpeg')} className={classes.bigAvatar}/><br/>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <Button variant="contained" color="default" component="span">
            Upload
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
          </Button>
        </label> <span className={classes.filename}>{this.state.photo ? this.state.photo.name : ''}</span><br/>
        <TextField id="name" label="Name" className={classes.textField} value={this.state.name} margin="normal"/><br/>
        <TextField
          id="multiline-flexible"
          label="About"
          multiline
          rows="2"
          value={this.state.about}
          className={classes.textField}
          margin="normal"
        /><br/>
        <TextField id="email" type="email" label="Email" className={classes.textField} value={this.state.email} margin="normal"/><br/>
        <TextField id="password" type="password" label="Password" className={classes.textField} value={this.state.password} margin="normal"/>
        <br/> {
          this.state.error && (<Typography component="p" color="error">
            <Icon color="error" className={classes.error}>error</Icon>
            {this.state.error}
          </Typography>)
        }
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" className={classes.submit}>Submit</Button>
      </CardActions>
    </Card>
    )
  }
}

ProfileEdit.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileEdit)