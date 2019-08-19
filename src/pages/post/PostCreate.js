import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import axios from '../../constants/Axios';
import authToken from '../../constants/AuthToken';

const styles = theme => ({
  root: {
    backgroundColor: '#efefef',
    padding: `${theme.spacing.unit*3}px 0px 1px`
  },
  card: {
    maxWidth:600,
    margin: 'auto',
    marginBottom: theme.spacing.unit*3,
    boxShadow: 'none'
  },
  cardContent: {
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0
  },
  cardHeader: {
    paddingLeft: 30,
    paddingTop: 8,
    paddingBottom: 8
  },
  photoButton: {
    height: 10,
    marginBottom: 2
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2,
    width: '90%'
  },
  submit: {
    margin: theme.spacing.unit,
  },
  filename:{
    verticalAlign: 'super'
  }
})

class PostCreate extends Component {
  state = {
    text: '',
    file: {},
    error: '',
    user: {}
  }

   addPost = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('photo',this.state.file);
    const resFirst = await axios.post('uploadphoto' ,formData,{
      headers: {
        "Authorization": authToken,
        "content-type": "multipart/form-data"
      }
    })
    console.log(resFirst.data.toString())
    
    const resSecond = await axios.post('post',{
      text: this.state.text,
      photo: resFirst.data
    },{
      headers: {
        "Authorization" : authToken
      }
    })

    console.log(resSecond)

    const res = await axios.get('posts',{
      headers: {
        "Authorization": authToken
      }
    })

    console.log(res)
  }

  render() {
    const {classes} = this.props
    return (<div className={classes.root}>
      <Card className={classes.card}>
      <CardHeader
            avatar={
              <Avatar src={require('../../resources/signup-background.jpeg')}/>
            }
            title="Pawan Jain"
            className={classes.cardHeader}
          />
      <CardContent className={classes.cardContent}>
        <TextField
            placeholder="Share your thoughts ..."
            multiline
            rows="2"
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
            className={classes.textField}
            margin="normal"
        />
        
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" name="photo" onChange={(e) => this.setState({file: e.target.files[0]})}/>
        <label htmlFor="icon-button-file">
          <IconButton color="secondary" className={classes.photoButton} component="span">
            <PhotoCamera />
          </IconButton>

        </label><span className={classes.filename}>{this.state.file ? this.state.file.name: ''}</span>
        { this.state.error && (<Typography component="p" color="error">
            <Icon color="error" className={classes.error}>error</Icon>
              {this.state.error}
            </Typography>)
        }
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" disabled={false} className={classes.submit} onClick={(e) => this.addPost(e)}>POST</Button>
      </CardActions>
    </Card>
  </div>)
  }
}

PostCreate.propTypes = {
  classes: PropTypes.object.isRequired,
  addUpdate: PropTypes.func.isRequired
}

export default withStyles(styles)(PostCreate)
